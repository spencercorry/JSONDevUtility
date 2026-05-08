# JSON Developer Utility

A split-pane, client-side developer utility hosted on GitHub Pages. The left pane accepts raw JSON, validates it live, and formats it on demand. The right pane lazily generates TypeScript Interfaces, Pydantic Models, and raw JS Objects from a user-configured Submit modal.

> Generated with [Angular CLI](https://github.com/angular/angular-cli) version 20.0.3.

---

## Quick Start

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
ng serve
```

Open your browser at `http://localhost:4200/`. The app reloads automatically on file changes.

## Build & Deploy

Build for production:

```bash
ng build --base-href /your-repo-name/
```

Artifacts are written to `dist/`. Copy `dist/index.html` to `dist/404.html` before deploying to GitHub Pages.

## Running Tests

```bash
ng test
```

---

## Technical Design Document

### 1. Overview

A strict 50/50 split-pane app. No backend, no routing, one page. Left pane = JSON input. Right pane = tabbed code output. Deployed as a static site on GitHub Pages.

---

### 2. Technology Stack

| Layer | Technology | Version Target |
|---|---|---|
| Framework | Angular | 20+ (standalone components, no NgModules) |
| Reactivity | Angular Signals | Native (`signal`, `computed`, `effect`) |
| Editor | ngx-monaco-editor-v2 | Latest |
| UI Components | Angular Material | 19+ (MDC-based) |
| Styling | Angular Material Theming + SCSS | Custom dark token set |
| Language | TypeScript | 5.4+ |
| Build | Angular CLI (`ng build`) | — |
| Hosting | GitHub Pages | Manual deploy |

---

### 3. File & Folder Structure

```
src/
├── app/
│   ├── app.component.ts          # Root shell, layout host
│   ├── app.config.ts             # provideAnimations, provideMonacoEditor
│   │
│   ├── components/
│   │   ├── left-pane/
│   │   │   ├── left-pane.component.ts
│   │   │   └── left-pane.component.scss
│   │   │
│   │   ├── right-pane/
│   │   │   ├── right-pane.component.ts
│   │   │   └── right-pane.component.scss
│   │   │
│   │   ├── output-tab/
│   │   │   ├── output-tab.component.ts
│   │   │   └── output-tab.component.scss
│   │   │
│   │   └── submit-modal/
│   │       ├── submit-modal.component.ts
│   │       └── submit-modal.component.scss
│   │
│   ├── services/
│   │   ├── json-state.service.ts         # Central signal store
│   │   ├── typescript-generator.service.ts
│   │   ├── pydantic-generator.service.ts
│   │   └── js-object-generator.service.ts
│   │
│   ├── models/
│   │   └── generation-config.model.ts    # Interfaces for modal output
│   │
│   └── utils/
│       ├── json-parser.util.ts           # Parse + extract schema tree
│       ├── singularize.util.ts           # "users" → "User"
│       └── monaco-theme.util.ts          # Custom theme definition
│
├── styles/
│   ├── _theme.scss                       # Angular Material custom theme
│   ├── _variables.scss                   # SCSS design tokens
│   └── styles.scss                       # Global styles
```

---

### 4. Data Models

#### `GenerationConfig`

```
GenerationConfig {
  rootTypeName:      string
  pydanticVersion:   'v1' | 'v2'
  nullMode:          'global' | 'per-field'
  globalNullType:    'string' | 'number' | 'boolean' | 'combination'  // if nullMode = global
  perFieldNullMap:   Record<string, 'string' | 'number' | 'boolean' | 'combination'>  // if nullMode = per-field
}
```

#### `SchemaNode` (internal AST)

```
SchemaNode {
  key:        string
  typeName:   string                  // resolved interface/class name
  kind:       'primitive' | 'object' | 'array' | 'null' | 'union' | 'unknown'
  children:   SchemaNode[]            // populated for kind = 'object'
  itemType:   SchemaNode | null       // populated for kind = 'array'
}
```

#### `OutputCache`

```
OutputCache {
  typescript:   string | null
  pydantic:     string | null
  jsObject:     string | null
}
```

---

### 5. Signal Graph

All application state lives in `JsonStateService`. Components read signals; only `JsonStateService` writes them.

```
┌─────────────────────────────────────────────────────┐
│                  JsonStateService                   │
│                                                     │
│  WRITABLE SIGNALS                                   │
│  ─────────────────────────────────────────────────  │
│  rawJson          = signal<string>('')              │
│  generationConfig = signal<GenerationConfig | null> │
│  activeTab        = signal<'ts'|'pydantic'|'js'>    │
│  outputCache      = signal<OutputCache>             │
│                                                     │
│  COMPUTED SIGNALS                                   │
│  ─────────────────────────────────────────────────  │
│  parseResult = computed(() => {                     │
│    try { return { ok: true, value: JSON.parse() }   │
│    catch { return { ok: false, error: string } }    │
│  })                                                 │
│                                                     │
│  isValid  = computed(() => parseResult().ok)        │
│  errorMsg = computed(() => parseResult().error)     │
│                                                     │
│  schemaTree = computed(() =>                        │
│    isValid() ? buildSchemaTree(parseResult().value) │
│              : null                                 │
│  )                                                  │
└─────────────────────────────────────────────────────┘
         │
         │ injected into
         ▼
┌──────────────────┐    ┌───────────────────────────────┐
│  LeftPane        │    │  RightPane                    │
│                  │    │                               │
│  reads:          │    │  reads:                       │
│  - rawJson       │    │  - isValid                    │
│  - isValid       │    │  - errorMsg                   │
│                  │    │  - activeTab                  │
│  writes:         │    │  - outputCache                │
│  - rawJson       │    │                               │
│  (on editor      │    │  writes:                      │
│   change)        │    │  - activeTab (on tab click)   │
└──────────────────┘    └───────────────────────────────┘
```

#### Lazy Output Resolution via `effect()`

```
effect(() => {
  const tab   = activeTab();
  const tree  = schemaTree();
  const cfg   = generationConfig();
  const cache = outputCache();

  if (!tree || !cfg) return;
  if (cache[tab] !== null) return;   // already computed, skip

  const result = generateForTab(tab, tree, cfg);
  outputCache.update(c => ({ ...c, [tab]: result }));
});
```

#### Cache Invalidation

When the user clicks **Submit** and confirms the modal, `JsonStateService.applyConfig(config)` runs:

```
outputCache.set({ typescript: null, pydantic: null, jsObject: null });
generationConfig.set(config);
```

This nulls the cache, which causes the `effect()` to re-generate for the active tab on next evaluation.

---

### 6. Component Architecture

#### 6.1 `AppComponent`

- Root shell only. Owns the two-column 50/50 CSS Grid layout.
- Imports `LeftPaneComponent` and `RightPaneComponent`.
- No business logic.

```
layout:
┌─────────────────────┬─────────────────────┐
│    LeftPane 50%     │    RightPane 50%     │
└─────────────────────┴─────────────────────┘
```

#### 6.2 `LeftPaneComponent`

**Responsibilities:**
- Hosts the left Monaco editor (JSON language mode, custom dark theme).
- Wires `ngx-monaco-editor` `valueChange` → `jsonStateService.rawJson.set()`.
- Wires Monaco's `onInit` to register custom dark theme and set JSON diagnostics (validation markers) on.
- **Beautify button**: calls `JSON.parse()` + `JSON.stringify(val, null, 2)` and sets result back into the editor model. Shows snackbar if invalid.
- **Submit button**: disabled when `!isValid()`. Opens `SubmitModalComponent` via `MatDialog`. On close with a `GenerationConfig` result, calls `jsonStateService.applyConfig()`.

#### 6.3 `RightPaneComponent`

**Responsibilities:**
- Hosts `MatTabGroup` with three tabs: **TypeScript**, **Pydantic**, **JS Object**.
- Binds `[disabled]="!isValid()"` to each `MatTab`.
- Applies a greyed-out CSS class to tab labels when `!isValid()`.
- When `isValid()` is false, shows an error panel inside the tab body:

```
┌─────────────────────────────────┐
│  ⚠ JSON Parse Error             │
│  Line 4, Col 12: Unexpected     │
│  token '}'                      │
└─────────────────────────────────┘
```

- On `(selectedTabChange)`, calls `jsonStateService.activeTab.set(tab)`.
- When `isValid()` is true, renders `OutputTabComponent` inside each tab.

#### 6.4 `OutputTabComponent`

**Input signals:** `content: InputSignal<string | null>`, `language: InputSignal<string>`

**Responsibilities:**
- Hosts a **read-only** Monaco editor displaying the generated code.
- Shows a skeleton/spinner when `content()` is `null` (generating).
- **Copy to Clipboard** button (top-right corner) uses `navigator.clipboard.writeText(content())`. Briefly shows a checkmark on success.
- Language modes: `typescript`, `python`, `javascript`.

#### 6.5 `SubmitModalComponent`

Opened via `MatDialog.open()`. Returns a `GenerationConfig` or `undefined` (dismissed).

**Form layout:**

```
┌──────────────────────────────────────────────┐
│  Configure Generation                        │
├──────────────────────────────────────────────┤
│  Root Type Name  [ MyRootType         ]      │
│                                              │
│  Pydantic Version  ○ v1   ● v2              │
│                                              │
│  Null Value Handling                         │
│  ┌──────────────────────────────────────┐   │
│  │  Mode:  [Global ▼]  [Per-field ▼]   │   │
│  └──────────────────────────────────────┘   │
│                                              │
│  — if Global ————————————————————————————   │
│  Treat nulls as: [string | null  ▼]         │
│                                              │
│  — if Per-field ──────────────────────────  │
│  email (null)   [string | null  ▼]          │
│  score (null)   [number | null  ▼]          │
│  ...                                        │
├──────────────────────────────────────────────┤
│                    [Cancel]  [Generate →]    │
└──────────────────────────────────────────────┘
```

**Per-field population:** The modal receives the `SchemaNode` tree as `data` via `MAT_DIALOG_DATA`. It filters all nodes where `kind === 'null'` to build the per-field form array.

---

### 7. Service Layer — Code Generators

All three generator services are pure, stateless, and injectable. They accept a `SchemaNode` tree and a `GenerationConfig` and return a formatted string.

#### 7.1 `JsonParserUtil.buildSchemaTree(value, key, config)`

Central recursive function that converts a parsed JSON value into a `SchemaNode` tree.

**Algorithm:**

```
buildSchemaTree(value, key):
  if value === null       → { kind: 'null', resolvedType: from config }
  if typeof === 'string'  → { kind: 'primitive', typeName: 'string' }
  if typeof === 'number'  → { kind: 'primitive', typeName: 'number' }
  if typeof === 'boolean' → { kind: 'primitive', typeName: 'boolean' }
  if Array.isArray:
    if empty              → { kind: 'array', itemType: 'unknown' }
    collect unique kinds from all items
    if all items are objects:
      itemTypeName = singularize(PascalCase(key))
      → { kind: 'array', itemType: buildSchemaTree(items[0], itemTypeName) }
    if items are mixed primitives:
      → { kind: 'union', members: [...unique primitives] }
    else:
      → { kind: 'unknown' }
  if typeof === 'object':
    children = Object.entries(value).map(([k,v]) => buildSchemaTree(v, k))
    → { kind: 'object', typeName: PascalCase(key), children }
```

**Deduplication:** Before generating code, the tree is flattened into a `Map<typeName, SchemaNode>` to prevent duplicate interface declarations.

#### 7.2 `SingularizeUtil`

```
-ies → -y    (categories → Category)
-ses → -s    (addresses → Address)
-s   → ''    (users → User)
fallback:    append 'Item' (data → DataItem)
```

#### 7.3 `TypeScriptGeneratorService`

One `export interface` block per unique object node. Root uses `rootTypeName`. Nested interfaces use `PascalCase(key)`. All fields are required.

**Null type mapping:**

| Config Value | TypeScript Type |
|---|---|
| `'string'` | `string \| null` |
| `'number'` | `number \| null` |
| `'boolean'` | `boolean \| null` |
| `'combination'` | `string \| number \| boolean \| null` |

**Sample output:**

```typescript
export interface Address {
  city: string;
  zip: string;
}

export interface User {
  id: number;
  email: string | null;
  address: Address;
  tags: string[];
}

export interface Root {
  users: User[];
  count: number;
}
```

#### 7.4 `PydanticGeneratorService`

**v1 output:**

```python
from typing import Optional, List, Union, Any
from pydantic import BaseModel

class Address(BaseModel):
    city: str
    zip: str

class User(BaseModel):
    id: int
    email: Optional[str]
    address: Address
    tags: List[str]
```

**v2 output:**

```python
from typing import Optional, List, Union, Any
from pydantic import BaseModel, ConfigDict

class Address(BaseModel):
    model_config = ConfigDict(strict=True)
    city: str
    zip: str
```

**Type mapping:**

| JSON | Python |
|---|---|
| `string` | `str` |
| `number` (integer) | `int` |
| `number` (float) | `float` |
| `boolean` | `bool` |
| `null` | `Optional[X]` |
| mixed union | `Union[str, int, bool]` |
| unknown | `Any` |

#### 7.5 `JsObjectGeneratorService`

Produces a `const data = { ... }` literal. Keys are unquoted where they are valid JS identifiers (`/^[a-zA-Z_$][a-zA-Z0-9_$]*$/`). String values use single quotes.

```javascript
const data = {
  users: [
    {
      id: 1,
      email: 'alice@example.com',
      tags: ['admin', 'user']
    }
  ],
  count: 1
}
```

---

### 8. Monaco Editor Configuration

#### 8.1 Global Options (`app.config.ts`)

```
provideMonacoEditor({
  baseUrl: 'assets',
  defaultOptions: {
    scrollBeyondLastLine: false,
    minimap: { enabled: false },
    fontSize: 13,
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    lineNumbers: 'on',
    renderLineHighlight: 'line',
    padding: { top: 12 }
  }
})
```

#### 8.2 Left Pane

```
language: 'json'
theme: 'utilityDark'
automaticLayout: true
formatOnPaste: true
```

#### 8.3 Right Pane (per tab)

```
language: 'typescript' | 'python' | 'javascript'
theme: 'utilityDark'
readOnly: true
automaticLayout: true
lineNumbers: 'off'
folding: true
```

#### 8.4 Custom Monaco Theme — `utilityDark`

Registered via `monaco.editor.defineTheme('utilityDark', ...)` to match the Angular Material dark palette.

| Token | Color |
|---|---|
| Editor background | `#0f1117` |
| Keywords | `#7c6af7` |
| Strings | `#80cfa9` |
| Numbers | `#e8a97e` |
| Comments | `#4a5568` |
| Types/Interfaces | `#63b3ed` |
| Properties | `#e2e8f0` |
| Gutter background | `#0f1117` |
| Line highlight | `#1a1f2e` |
| Cursor | `#7c6af7` |

---

### 9. Angular Material Theme

#### 9.1 Custom Theme (`_theme.scss`)

```scss
@use '@angular/material' as mat;

$primary:   mat.define-palette(mat.$indigo-palette, 400, 200, 600);
$accent:    mat.define-palette(mat.$cyan-palette, 400);
$warn:      mat.define-palette(mat.$red-palette, 400);

$theme: mat.define-dark-theme((
  color: (primary: $primary, accent: $accent, warn: $warn),
  typography: mat.define-typography-config(
    $font-family: "'Inter', sans-serif"
  ),
  density: -1
));

@include mat.all-component-themes($theme);
```

#### 9.2 Design Tokens (`_variables.scss`)

```scss
$surface-base:    #0f1117;
$surface-raised:  #161b27;
$surface-overlay: #1e2535;
$border-subtle:   #2d3548;
$text-primary:    #e2e8f0;
$text-muted:      #718096;
$accent-primary:  #7c6af7;
$accent-success:  #80cfa9;
$accent-error:    #fc8181;
```

#### 9.3 Component Overrides

- **`MatTab` disabled state**: opacity `0.35`, cursor `not-allowed`.
- **`MatDialog`**: `panelClass: 'utility-modal'` — `border: 1px solid $border-subtle`, `border-radius: 12px`, `background: $surface-raised`.
- **Buttons**: `border-radius: 6px`. Beautify = `mat-stroked-button`. Submit = `mat-flat-button` primary.
- **Copy button**: `mat-icon-button` positioned `absolute; top: 8px; right: 8px`.

---

### 10. Error Handling Strategy

#### 10.1 JSON Validation Flow

```
User types → rawJson signal → parseResult computed
     ↓ valid                        ↓ invalid
isValid=true                    isValid=false
schemaTree populated            errorMsg set
                                tabs: disabled + greyed
                                right panel: error message
                                Monaco: red squiggles (automatic)
```

#### 10.2 Beautify on Invalid JSON

`MatSnackBar`: `"Cannot beautify — fix JSON errors first."` — 3000ms, bottom-center.

#### 10.3 Clipboard Failure

`MatSnackBar`: `"Copy failed. Please select and copy manually."`

#### 10.4 Generator Errors

```
// Generation error: <message>
// Please report this with your input JSON.
```

---

### 11. CSS Grid Layout Spec

```scss
// app.component.scss
:host {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh;
  overflow: hidden;
  background: $surface-base;
}

.left-pane {
  display: grid;
  grid-template-rows: 1fr auto;
  border-right: 1px solid $border-subtle;
}

.left-pane__actions {
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  border-top: 1px solid $border-subtle;
  background: $surface-raised;
}

.right-pane {
  display: grid;
  grid-template-rows: auto 1fr;
}
```

---

### 12. Build & Deployment Notes

#### 12.1 GitHub Pages Base Href

```bash
ng build --base-href /your-repo-name/
```

Or set permanently in `angular.json`:

```json
"baseHref": "/your-repo-name/"
```

#### 12.2 Monaco Assets

Add to `angular.json` `assets` array:

```json
{
  "glob": "**/*",
  "input": "node_modules/monaco-editor/min/vs",
  "output": "assets/vs"
}
```

#### 12.3 404 Handling

Copy `dist/index.html` → `dist/404.html` before deploying.

---

### 13. Implementation Sequence

| Phase | Deliverable |
|---|---|
| 1 | Scaffold Angular app, configure Material theme, SCSS tokens |
| 2 | Monaco integration — left pane editor, custom theme, JSON validation |
| 3 | `JsonStateService` — all signals and computed values |
| 4 | `JsonParserUtil.buildSchemaTree` + `SingularizeUtil` |
| 5 | `TypeScriptGeneratorService` |
| 6 | `PydanticGeneratorService` (v1 + v2) |
| 7 | `JsObjectGeneratorService` |
| 8 | `SubmitModalComponent` — reactive form, per-field/global toggle |
| 9 | `RightPaneComponent` — tabs, error panel, output editors |
| 10 | `OutputTabComponent` — read-only Monaco, copy button |
| 11 | Wire Submit button → modal → `applyConfig()` → lazy effect |
| 12 | Beautify button + snackbar error handling |
| 13 | Polish: transitions, disabled tab styles, copy button feedback |
| 14 | Build config, base-href, Monaco assets, 404.html |

# Technical Design Document

## JSON Developer Utility — Angular Client-Side Application

---

## 1. Overview

A split-pane, client-side developer utility hosted on GitHub Pages. The left pane accepts raw JSON, validates it live, and formats it on demand. The right pane lazily generates TypeScript Interfaces, Pydantic Models, and raw JS Objects from a user-configured Submit modal. No backend. No routing. One page.

---

## 2. Technology Stack

| Layer | Technology | Version Target |
|---|---|---|
| Framework | Angular | 19+ (standalone components, no NgModules) |
| Reactivity | Angular Signals | Native (`signal`, `computed`, `effect`) |
| Editor | ngx-monaco-editor-v2 | Latest |
| UI Components | Angular Material | 19+ (MDC-based) |
| Styling | Angular Material Theming + SCSS | Custom dark token set |
| Language | TypeScript | 5.4+ |
| Build | Angular CLI (`ng build`) | — |
| Hosting | GitHub Pages | Manual deploy |

---

## 3. File & Folder Structure

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

## 4. Data Models

### `GenerationConfig`

```
GenerationConfig {
  rootTypeName:      string
  pydanticVersion:   'v1' | 'v2'
  nullMode:          'global' | 'per-field'
  globalNullType:    'string' | 'number' | 'boolean' | 'combination'  // if nullMode = global
  perFieldNullMap:   Record<string, 'string' | 'number' | 'boolean' | 'combination'>  // if nullMode = per-field
}
```

### `SchemaNode` (internal AST)

```
SchemaNode {
  key:        string
  typeName:   string                  // resolved interface/class name
  kind:       'primitive' | 'object' | 'array' | 'null' | 'union' | 'unknown'
  children:   SchemaNode[]            // populated for kind = 'object'
  itemType:   SchemaNode | null       // populated for kind = 'array'
}
```

### `OutputCache`

```
OutputCache {
  typescript:   string | null
  pydantic:     string | null
  jsObject:     string | null
}
```

---

## 5. Signal Graph

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

### Lazy Output Resolution via `effect()`

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

### Cache Invalidation

When the user clicks **Submit** and confirms the modal, `JsonStateService.applyConfig(config)` runs:

```
outputCache.set({ typescript: null, pydantic: null, jsObject: null });
generationConfig.set(config);
```

This nulls the cache, which causes the `effect()` to re-generate for the active tab on next evaluation.

---

## 6. Component Architecture

### 6.1 `AppComponent`

- Root shell only. Owns the two-column 50/50 CSS Grid layout.
- Imports `LeftPaneComponent` and `RightPaneComponent`.
- No business logic.

```
layout:
┌─────────────────────┬─────────────────────┐
│    LeftPane 50%     │    RightPane 50%     │
└─────────────────────┴─────────────────────┘
```

### 6.2 `LeftPaneComponent`

**Responsibilities:**
- Hosts the left Monaco editor (JSON language mode, custom dark theme).
- Wires `ngx-monaco-editor` `valueChange` → `jsonStateService.rawJson.set()`.
- Wires Monaco's `onInit` to register custom dark theme and set JSON diagnostics (validation markers) on.
- **Beautify button**: calls `JSON.parse()` + `JSON.stringify(val, null, 2)` and sets result back into the editor model. Shows no-op snackbar if invalid.
- **Submit button**: disabled when `!isValid()`. Opens `SubmitModalComponent` via `MatDialog`. On close with a `GenerationConfig` result, calls `jsonStateService.applyConfig()`.

### 6.3 `RightPaneComponent`

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

### 6.4 `OutputTabComponent`

**Input signals:** `content: InputSignal<string | null>`, `language: InputSignal<string>`

**Responsibilities:**
- Hosts a **read-only** Monaco editor displaying the generated code.
- Shows a skeleton/spinner when `content()` is `null` (generating).
- **Copy to Clipboard** button (top-right corner of the pane) uses the Clipboard API: `navigator.clipboard.writeText(content())`. Button briefly shows a checkmark on success.
- Language modes: `typescript`, `python`, `javascript`.

### 6.5 `SubmitModalComponent`

Opened via `MatDialog.open()`. Returns a `GenerationConfig` or `undefined` (dismissed).

**Form layout (Angular Material `ReactiveFormsModule`):**

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

## 7. Service Layer — Code Generators

All three generator services are pure, stateless, and injectable. They accept a `SchemaNode` tree and a `GenerationConfig` and return a formatted string.

### 7.1 `JsonParserUtil.buildSchemaTree(value, key, config)`

Central recursive function that converts a parsed JSON value into a `SchemaNode` tree. Called once inside the `schemaTree` computed signal.

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

**Deduplication:** Before generating code, the tree is flattened into a `Map<typeName, SchemaNode>` to prevent duplicate interface declarations when the same shape appears under multiple keys.

### 7.2 `SingularizeUtil`

A focused utility (no external library) that handles the most common English pluralization patterns:

```
-ies → -y    (categories → Category)
-ses → -s    (addresses → Address)
-s   → ''    (users → User)
fallback:    append 'Item' (data → DataItem)
```

### 7.3 `TypeScriptGeneratorService`

**Output contract:** One `export interface` block per unique `SchemaNode` of `kind === 'object'`. Root interface uses `rootTypeName`. Nested interfaces use `PascalCase(key)`.

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

### 7.4 `PydanticGeneratorService`

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

**Type mapping (both versions):**

| JSON | Python |
|---|---|
| `string` | `str` |
| `number` (integer) | `int` |
| `number` (float) | `float` |
| `boolean` | `bool` |
| `null` (global/per-field) | `Optional[X]` |
| mixed union | `Union[str, int, bool]` |
| unknown | `Any` |

Number integer vs float is detected via `Number.isInteger()` at parse time.

### 7.5 `JsObjectGeneratorService`

Produces a `const data = { ... }` literal from the raw parsed JSON value. Keys are unquoted where they are valid JS identifiers (regex: `/^[a-zA-Z_$][a-zA-Z0-9_$]*$/`). Non-conforming keys remain quoted. Values use JS literal syntax (single quotes on strings).

**Sample output:**

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

## 8. Monaco Editor Configuration

### 8.1 Registration (`app.config.ts`)

```
provideMonacoEditor({
  baseUrl: 'assets',        // monaco assets copied to assets/ at build time
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

### 8.2 Left Pane Editor Options

```
language: 'json'
theme: 'utilityDark'          // custom theme (see 8.4)
automaticLayout: true
formatOnPaste: true
```

JSON validation is handled natively by Monaco's built-in JSON language worker. No additional setup needed for red squiggles.

### 8.3 Right Pane Editor Options (per tab)

```
language: 'typescript' | 'python' | 'javascript'
theme: 'utilityDark'
readOnly: true
automaticLayout: true
lineNumbers: 'off'
folding: true
```

### 8.4 Custom Monaco Theme (`monaco-theme.util.ts`)

Defined once and registered via `monaco.editor.defineTheme('utilityDark', ...)`. Token colors match the Angular Material custom palette:

| Token | Color | Rationale |
|---|---|---|
| Editor background | `#0f1117` | Matches Material surface |
| Keywords | `#7c6af7` | Primary accent (violet) |
| Strings | `#80cfa9` | Teal-green |
| Numbers | `#e8a97e` | Warm orange |
| Comments | `#4a5568` | Subdued grey |
| Types/Interfaces | `#63b3ed` | Cool blue |
| Properties | `#e2e8f0` | Off-white |
| Gutter background | `#0f1117` | Unified |
| Line highlight | `#1a1f2e` | Subtle row tint |
| Cursor | `#7c6af7` | Accent match |

---

## 9. Angular Material Theme

### 9.1 Custom Theme (`_theme.scss`)

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

### 9.2 Design Tokens (`_variables.scss`)

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

### 9.3 Component Overrides

- **`MatTab` disabled state**: opacity `0.35`, cursor `not-allowed`, pointer-events disabled via host attribute binding.
- **`MatDialog`**: `panelClass: 'utility-modal'` — custom SCSS sets `border: 1px solid $border-subtle`, `border-radius: 12px`, `background: $surface-raised`.
- **Buttons**: Sharp `border-radius: 6px`. Beautify = `mat-stroked-button`. Submit = `mat-flat-button` with primary color.
- **Copy button**: `mat-icon-button` positioned `absolute; top: 8px; right: 8px` inside the output tab container.

---

## 10. Error Handling Strategy

### 10.1 JSON Validation Flow

```
User types in left Monaco editor
        │
        ▼
rawJson signal updates
        │
        ▼
parseResult computed re-evaluates
        │
   ┌────┴────┐
valid?       invalid?
   │              │
   ▼              ▼
isValid=true   isValid=false
schemaTree     errorMsg = "Unexpected token '}' at line 4, col 12"
populated
               Right pane:
               - tabs: disabled + greyed
               - body: error panel rendered
               - Monaco: red squiggle via
                 built-in JSON worker (automatic)
```

### 10.2 Beautify Error Handling

If Beautify is clicked while JSON is invalid, the editor contents are left unchanged and a `MatSnackBar` notification appears:

```
"Cannot beautify — fix JSON errors first."   [×]
```

Duration: 3000ms. Position: bottom-center.

### 10.3 Clipboard Failure

If `navigator.clipboard.writeText()` rejects (e.g., browser permissions), a `MatSnackBar` error appears:

```
"Copy failed. Please select and copy manually."
```

### 10.4 Generator Errors

All generator services wrap their logic in `try/catch`. If an unexpected error occurs (malformed schema tree, edge case), the output tab displays:

```
// Generation error: <message>
// Please report this with your input JSON.
```

This ensures the right pane never shows a blank screen.

---

## 11. Application Layout — CSS Grid Spec

```scss
// app.component.scss
:host {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh;
  overflow: hidden;
  background: $surface-base;
}

// Left pane internal layout
.left-pane {
  display: grid;
  grid-template-rows: 1fr auto;   // editor expands, buttons fixed at bottom
  border-right: 1px solid $border-subtle;
}

.left-pane__actions {
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  border-top: 1px solid $border-subtle;
  background: $surface-raised;
}

// Right pane internal layout
.right-pane {
  display: grid;
  grid-template-rows: auto 1fr;   // tabs header fixed, body expands
}
```

---

## 12. Build & Deployment Notes

### 12.1 `angular.json` — GitHub Pages Base Href

Before running `ng build` for deployment:

```bash
ng build --base-href /your-repo-name/
```

Or set permanently in `angular.json`:

```json
"baseHref": "/your-repo-name/"
```

### 12.2 Monaco Assets

`ngx-monaco-editor-v2` requires Monaco's worker files to be served statically. Add to `angular.json` `assets` array:

```json
{
  "glob": "**/*",
  "input": "node_modules/monaco-editor/min/vs",
  "output": "assets/vs"
}
```

### 12.3 404 Handling

GitHub Pages requires a `404.html` that mirrors `index.html` for single-page apps without a backend. Since this app has no client-side routing, a simple copy of `index.html` to `404.html` in the `dist/` folder before deploying is sufficient.

---

## 13. Implementation Sequence

Recommended build order to ensure each layer is testable before the next depends on it:

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

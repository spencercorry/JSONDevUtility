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

Build for production (repo name is `JSONDevUtility`):

```bash
npm run build:gh-pages
```

Or manually:

```bash
ng build --base-href /JSONDevUtility/
```

Then copy `dist/jsonapp/browser/index.html` → `dist/jsonapp/browser/404.html` before pushing to the `gh-pages` branch.

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
| Framework | Angular | 21+ (standalone components, no NgModules) |
| Reactivity | Angular Signals | Native (`signal`, `computed`, `effect`) |
| Editor | ngx-monaco-editor-v2 | Latest |
| UI Components | Angular Material | 21+ (M3 theming) |
| Styling | Angular Material Theming + SCSS | Custom dark token set |
| Language | TypeScript | 5.4+ |
| Build | Angular CLI (`ng build`) | — |
| Hosting | GitHub Pages | Manual deploy |

---

### 3. File & Folder Structure

```
src/
├── app/
│   ├── app.ts                    # Root shell, layout host
│   ├── app.html
│   ├── app.scss
│   ├── app.config.ts             # provideAnimations, provideMonacoEditor
│   │
│   ├── components/
│   │   ├── header/
│   │   │   ├── header.component.ts
│   │   │   └── header.component.scss
│   │   │
│   │   ├── left-pane/
│   │   │   ├── left-pane.component.ts
│   │   │   ├── left-pane.component.html
│   │   │   └── left-pane.component.scss
│   │   │
│   │   ├── right-pane/
│   │   │   ├── right-pane.component.ts
│   │   │   ├── right-pane.component.html
│   │   │   └── right-pane.component.scss
│   │   │
│   │   ├── output-tab/
│   │   │   ├── output-tab.component.ts
│   │   │   └── output-tab.component.scss
│   │   │
│   │   ├── submit-modal/
│   │   │   ├── submit-modal.component.ts
│   │   │   ├── submit-modal.component.html
│   │   │   └── submit-modal.component.scss
│   │   │
│   │   └── help-modal/
│   │       ├── help-modal.component.ts
│   │       ├── help-modal.component.html
│   │       └── help-modal.component.scss
│   │
│   ├── services/
│   │   ├── json-state.service.ts           # Central signal store
│   │   ├── typescript-generator.service.ts
│   │   ├── pydantic-generator.service.ts
│   │   └── js-object-generator.service.ts
│   │
│   ├── models/
│   │   └── generation-config.model.ts      # FieldType, FieldConfig, GenerationConfig, SchemaNode, OutputCache
│   │
│   └── utils/
│       ├── json-parser.util.ts             # buildSchemaTree, extractNullFields, extractAllLeafFields
│       ├── singularize.util.ts             # "users" → "User"
│       └── monaco-theme.util.ts            # Custom utilityDark theme definition
│
├── styles/
│   ├── _variables.scss                     # SCSS design tokens
│   └── styles.scss                         # Global styles + M3 theme + dialog override
```

---

### 4. Data Models

#### `FieldType`

```
type FieldType = 'integer' | 'string' | 'float' | 'boolean' | 'datetime'
```

#### `FieldConfig`

```
FieldConfig {
  types:    FieldType[]   // multi-select; empty array = unresolved null field (user must fill)
  optional: boolean       // TS: key?:type  |  Pydantic: Optional[T] = None
}
```

#### `GenerationConfig`

```
GenerationConfig {
  rootTypeName:    string
  pydanticVersion: 'v1' | 'v2'
  fieldMap:        Record<string, FieldConfig>
  // Keys are full hierarchical dot-paths, e.g. "user.profile.age"
  // Covers both null fields (required, empty types[]) and leaf overrides (from Advanced Options)
}
```

#### `SchemaNode` (internal AST)

```
SchemaNode {
  key:      string
  typeName: string                  // resolved interface/class name
  kind:     'primitive' | 'object' | 'array' | 'null' | 'union' | 'unknown'
  children: SchemaNode[]            // populated for kind = 'object'
  itemType: SchemaNode | null       // populated for kind = 'array'
  unionMembers: string[]            // populated for kind = 'union' (e.g. ['integer','string'])
}
```

#### `OutputCache`

```
OutputCache {
  typescript: string | null
  pydantic:   string | null
  jsObject:   string | null
}
```

---

### 5. Signal Graph

All application state lives in `JsonStateService`. Components read signals; only `JsonStateService` writes them.

```
┌────────────────────────────────────────────────────────┐
│                   JsonStateService                     │
│                                                        │
│  WRITABLE SIGNALS                                      │
│  ──────────────────────────────────────────────────    │
│  rawJson          = signal<string>('')                 │
│  generationConfig = signal<GenerationConfig | null>    │
│  activeTab        = signal<'typescript'|'pydantic'|    │
│                            'jsObject'>                 │
│  outputCache      = signal<OutputCache>                │
│                                                        │
│  COMPUTED SIGNALS                                      │
│  ──────────────────────────────────────────────────    │
│  parseResult = computed(() => {                        │
│    try { return { ok: true, value: JSON.parse() }      │
│    catch { return { ok: false, error: string } }       │
│  })                                                    │
│                                                        │
│  isValid  = computed(() => parseResult().ok)           │
│  errorMsg = computed(() => parseResult().error)        │
│                                                        │
│  schemaTreePreview = computed(() =>                    │
│    isValid() ? buildSchemaTree(parseResult().value)    │
│              : null                                    │
│  )                                                     │
│  // Config-independent; used for null field extraction │
│  // and allLeafFields extraction before Submit         │
│                                                        │
│  schemaTree = computed(() =>                           │
│    isValid() && generationConfig()                     │
│      ? buildSchemaTree(parseResult().value)            │
│      : null                                            │
│  )                                                     │
│  // Config-dependent; used inside effect() generation  │
│                                                        │
│  PUBLIC METHODS                                        │
│  ──────────────────────────────────────────────────    │
│  applyConfig(config): resets outputCache → all null,  │
│                       sets generationConfig            │
│  clearAll():          resets rawJson(''),              │
│                       generationConfig(null),          │
│                       outputCache({ all: null })       │
└────────────────────────────────────────────────────────┘
```

#### Lazy Output Resolution via `effect()`

```
effect(() => {
  const tab   = activeTab();
  const tree  = schemaTree();
  const cfg   = generationConfig();
  const cache = outputCache();

  if (!tree || !cfg) return;
  if (cache[tab] !== null) return;   // cache hit — skip

  const result = generateForTab(tab, tree, cfg);
  outputCache.update(c => ({ ...c, [tab]: result }));
});
```

#### Cache Invalidation

When the user confirms Submit, `applyConfig(config)` runs:

```
outputCache.set({ typescript: null, pydantic: null, jsObject: null });
generationConfig.set(config);
```

When the user clicks Clear, `clearAll()` runs:

```
rawJson.set('');
generationConfig.set(null);
outputCache.set({ typescript: null, pydantic: null, jsObject: null });
```

---

### 6. Component Architecture

#### 6.1 `AppComponent`

Root shell. Owns the full-page layout via CSS Grid.

```
layout:
┌───────────────────────────────────────┐  ← HeaderComponent (fixed height)
├─────────────────────┬─────────────────┤
│    LeftPane 50%     │   RightPane 50% │  ← fills remaining viewport height
└─────────────────────┴─────────────────┘
```

Imports `HeaderComponent`, `LeftPaneComponent`, `RightPaneComponent`. No business logic.

#### 6.2 `LeftPaneComponent`

**Responsibilities:**
- Hosts the left Monaco editor (JSON language mode, custom dark theme).
- Wires `onDidChangeModelContent` → `jsonState.rawJson.set()`.
- Registers custom `utilityDark` theme on editor `onInit`.

**Action bar layout:**

```
[ Beautify ]  [ 2 | 4 ]  ·····················  [ Clear ]  [ Submit ]
  ↑ stroked    ↑ indent                           ↑ warn     ↑ flat primary
  left                                            right (post-Submit only)
```

- **Beautify**: parses + re-formats JSON using the current indent size. Shows snackbar on invalid JSON.
- **Indent size toggle**: `[2 | 4]` button group (local signal, default 2). Consumed by `beautify()`.
- **Submit**: disabled when `!isValid()`. Opens `SubmitModalComponent` via `MatDialog`. On close with a config, calls `jsonState.applyConfig(config)`.
- **Clear**: only visible when `jsonState.generationConfig()` is non-null. Calls `jsonState.clearAll()`, which empties the editor.

#### 6.3 `RightPaneComponent`

**Responsibilities:**
- Hosts `MatTabGroup` with three tabs: **TypeScript**, **Pydantic**, **JS Object**.
- Binds `[disabled]="!isValid()"` to each `MatTab`.
- Applies reduced-opacity + `cursor: not-allowed` CSS to disabled tab labels.
- Shows error panel inside tab body when `!isValid()`:

```
┌───────────────────────────────────┐
│  ⚠ JSON Parse Error               │
│  Line 4, Col 12: Unexpected '}'   │
└───────────────────────────────────┘
```

- On `(selectedTabChange)` → `jsonState.activeTab.set(tab)`.
- When valid, renders `OutputTabComponent` inside each tab.

#### 6.4 `OutputTabComponent`

**Input signals:** `content: InputSignal<string | null>`, `language: InputSignal<string>`

**Responsibilities:**
- Hosts a **read-only** Monaco editor displaying the generated code.
- Shows empty-state prompt when `content()` is `null` (not yet generated).
- **Copy to Clipboard** button (top-right) uses `navigator.clipboard.writeText(content())`. Shows a checkmark icon for 2s on success.
- Language modes: `typescript`, `python`, `javascript`.

#### 6.5 `SubmitModalComponent`

Opened via `MatDialog.open()`. Receives `SubmitModalData`; returns `GenerationConfig | undefined`.

```typescript
interface SubmitModalData {
  nullFields:    string[];                    // hierarchical paths of null-typed fields
  allLeafFields: Record<string, FieldType[]>; // all leaf paths with inferred types
}
```

**Form layout:**

```
┌──────────────────────────────────────────────────────┐
│  Configure Output                                    │
├──────────────────────────────────────────────────────┤
│  Root Type Name   [________________________]         │
│                                                      │
│  Pydantic Version   [ v1 ]  [ v2 ]                  │
│                                                      │
│  ── Null Fields (required) ──────────────────────   │
│  user.score   [int][str][flt][bool][dt]   □ Optional │
│  meta.tag     [int][str][flt][bool][dt]   □ Optional │
│  ...                                                 │
│                                                      │
│  ▶ Advanced Options  ────────────────────────────   │
│    (collapsed by default — click to expand)          │
│    user.id    [int][str][flt][bool][dt]   □ Optional │
│    user.name  [int][str][flt][bool][dt]   □ Optional │
│    ...                                               │
├──────────────────────────────────────────────────────┤
│                              [Cancel]  [Generate →]  │
└──────────────────────────────────────────────────────┘
```

**Behaviour:**
- Null fields section is always visible; each row uses multi-select toggle buttons — the user must select ≥1 type per null field before Generate is enabled.
- Advanced Options is a collapsible panel showing every leaf node. Buttons are pre-selected to the inferred type(s). The user may add/remove types (union building) and toggle the Optional checkbox.
- The Optional checkbox on a field maps to `FieldConfig.optional = true`.
- On confirm, the modal assembles a `GenerationConfig` from the form state and closes.

#### 6.6 `HeaderComponent`

**Responsibilities:**
- Fixed bar spanning full width above both panes.
- Left slot: placeholder branding text (name/logo TBD).
- Right slot: Help icon button → opens `HelpModalComponent` via `MatDialog`.

#### 6.7 `HelpModalComponent`

- Standard `MatDialog` with `panelClass: 'utility-modal'`.
- Static content: usage instructions for the app.
- Single **Close** button.

---

### 7. Service Layer — Code Generators

#### 7.1 `JsonParserUtil` (`json-parser.util.ts`)

**`buildSchemaTree(value, key, path?)`** — recursive; converts parsed JSON into a `SchemaNode` tree.

```
buildSchemaTree(value, key, path):
  if value === null         → { kind: 'null' }
  if typeof === 'boolean'   → { kind: 'primitive', typeName: 'boolean' }
  if typeof === 'number':
    Number.isInteger(value) → typeName: 'integer'
    else                    → typeName: 'float'
  if typeof === 'string'    → { kind: 'primitive', typeName: 'string' }
  if Array.isArray:
    if empty                → { kind: 'array', itemType: unknown }
    collect shallow types from all items
    if all objects          → merge via mergeObjects() → single object itemType
    if mixed primitives     → { kind: 'union', unionMembers: [...unique types] }
    if mixed (obj+prim)     → { kind: 'unknown' }
  if typeof === 'object':
    children = entries.map(([k,v]) => buildSchemaTree(v, k, path + '.' + k))
    → { kind: 'object', typeName: PascalCase(key), children }
```

**`mergeObjects(items)`** — merges an array of objects into a single representative object for schema inference. When the same key appears with different types across items, the result node becomes `kind: 'union'` covering all observed types.

**`extractNullFields(tree, prefix?)`** — returns `string[]` of full hierarchical dot-paths for all nodes where `kind === 'null'` (e.g. `"user.profile.age"`).

**`extractAllLeafFields(tree, prefix?)`** — returns `Record<string, FieldType[]>` mapping every leaf node's dot-path to its inferred type(s). null nodes map to `[]`; union nodes map to their `unionMembers`; primitives map to their single `typeName` cast to `FieldType`.

#### 7.2 `SingularizeUtil` (`singularize.util.ts`)

```
-ies → -y    (categories → Category)
-ses → -s    (addresses → Address)
-s   → ''    (users → User)
fallback:    append 'Item' (data → DataItem)
```

#### 7.3 `TypeScriptGeneratorService`

One `export interface` block per unique object node. Root uses `rootTypeName`. Nested interfaces use `PascalCase(key)`.

**Type mapping:**

| FieldType | TypeScript output |
|---|---|
| `integer` | `number` |
| `float` | `number` |
| `boolean` | `boolean` |
| `string` | `string` |
| `datetime` | `string` |
| union of N types | `T1 \| T2 \| ...` |
| optional flag | `key?: type` (instead of `key: type`) |

**`fieldMap` lookup:** When generating a field, look up its full dot-path in `config.fieldMap`. If found, use `FieldConfig.types` to build the type string and apply the optional flag. If not found, use the inferred type from the `SchemaNode`.

**Root name collision guard:** If a child object node resolves to the same type name as `rootTypeName`, append `"Item"` suffix to the child's name (e.g. `UserItem`) to prevent duplicate interface declarations.

**Sample output:**

```typescript
export interface Address {
  city: string;
  zip: string;
}

export interface User {
  id: number;
  email?: string;
  score: number | string;
  address: Address;
  tags: string[];
}

export interface Root {
  users: User[];
  count: number;
}
```

#### 7.4 `PydanticGeneratorService`

Classes emitted in dependency-first order (children before parents). Only used `typing` imports are included.

**Type mapping:**

| FieldType | Python output |
|---|---|
| `integer` | `int` |
| `float` | `float` |
| `boolean` | `bool` |
| `string` | `str` |
| `datetime` | `datetime` (adds `from datetime import datetime`) |
| union of N types | `Union[T1, T2, ...]` |
| optional flag | `Optional[T] = None` |

**`fieldMap` lookup:** Same dot-path lookup as TypeScript generator. Optional flag → `Optional[T] = None`.

**Root name collision guard:** Same suffix rule as TypeScript generator.

**v1 sample output:**

```python
from datetime import datetime
from typing import Optional, List, Union
from pydantic import BaseModel

class Address(BaseModel):
    city: str
    zip: str

class User(BaseModel):
    id: int
    email: Optional[str] = None
    score: Union[int, str]
    address: Address
    tags: List[str]

class Root(BaseModel):
    users: List[User]
    count: int
```

**v2 adds** `model_config = ConfigDict(strict=True)` to each class.

#### 7.5 `JsObjectGeneratorService`

Produces a `const data = { ... }` literal from the raw parsed value. Unquoted keys for valid JS identifiers. Single-quoted strings. Does not use `fieldMap` — purely structural.

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
  baseUrl: 'assets/vs',
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

Registered via `monaco.editor.defineTheme('utilityDark', ...)` on editor `onInit`.

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

M3 API exclusively via `mat.theme()` in `src/styles.scss`. Do **not** use M2 APIs (`mat.define-palette`, `mat.define-dark-theme`).

#### 9.1 Design Tokens (`_variables.scss`)

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

#### 9.2 Component Overrides

- **`MatTab` disabled state**: opacity `0.35`, cursor `not-allowed`.
- **`MatDialog`**: `panelClass: 'utility-modal'` — `border: 1px solid $border-subtle`, `border-radius: 12px`, `background: $surface-raised`.
- **Buttons**: `border-radius: 6px`. Beautify = `mat-stroked-button`. Submit = `mat-flat-button` primary. Clear = `mat-stroked-button` warn.
- **Type toggle buttons** (in modal): `MatButtonToggleGroup`, multi-select, compact size.
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
// app.scss
:host {
  display: grid;
  grid-template-rows: auto 1fr;   // header + pane row
  grid-template-columns: 1fr 1fr; // 50/50 split
  height: 100vh;
  overflow: hidden;
  background: $surface-base;
}

.app-header {
  grid-column: 1 / -1;            // spans full width
  border-bottom: 1px solid $border-subtle;
}

// Left pane internal layout
.left-pane {
  display: grid;
  grid-template-rows: 1fr auto;   // editor + action bar
  border-right: 1px solid $border-subtle;
}

.left-pane__actions {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-top: 1px solid $border-subtle;
  background: $surface-raised;

  .actions-right {
    margin-left: auto;
    display: flex;
    gap: 8px;
  }
}
```

---

### 12. Build & Deployment Notes

#### 12.1 GitHub Pages

Repo: `JSONDevUtility`. Build script in `package.json`:

```bash
npm run build:gh-pages
```

This runs `ng build --base-href /JSONDevUtility/` and copies `index.html` → `404.html`.

#### 12.2 Monaco Assets

In `angular.json` assets array:

```json
{
  "glob": "**/*",
  "input": "node_modules/monaco-editor/min/vs",
  "output": "assets/vs"
}
```

---

### 13. Known Bugs & Planned Fixes

#### Bug A — Root Type Name Collision

**Symptom:** If the user enters a `rootTypeName` (e.g. `"User"`) that matches a top-level key in the JSON (e.g. `{ "User": { ... } }`), both the root interface and the nested object resolve to the same type name, producing a duplicate declaration.

**Fix:** In both `TypeScriptGeneratorService` and `PydanticGeneratorService`, after deriving a child object's type name, check if it collides with `rootTypeName`. If so, append `"Item"` suffix to the child name.

#### Bug B — Heterogeneous Array Union Inference

**Symptom:** If a JSON array contains objects with the same key but different value types across elements (e.g. `[{x: 1}, {x: "a"}]`), `mergeObjects()` takes the first non-null value and discards conflicting types, so `x` is typed as `number` only.

**Fix:** Update `mergeObjects()` in `json-parser.util.ts` to detect type conflicts per key and produce a `kind: 'union'` node covering all observed types.

---

### 14. Implementation Sequence

#### Original Phases (complete)

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
| 14 | Build config, base-href `/JSONDevUtility/`, Monaco assets, 404.html |

#### Next Phases (planned)

| Phase | Deliverable |
|---|---|
| A | Model types rework — `FieldType`, `FieldConfig`, updated `GenerationConfig` |
| B | Parser util — `extractNullFields()` with hierarchical paths, new `extractAllLeafFields()`, `mergeObjects()` union fix |
| C | Generator rework — all 3 generators consume `fieldMap`; datetime support; root collision fix |
| D | `JsonStateService` — add `clearAll()`, pass `allLeafFields` to modal |
| E | Submit modal rework — null fields + Advanced Options collapsible section |
| F | Left pane — action bar rearrange, indent size toggle, Clear button |
| G | Header + Help modal components; `AppComponent` layout to 3-row grid |
| H | Generator unit tests — Karma/Jasmine for TS, Pydantic, JS Object generators |

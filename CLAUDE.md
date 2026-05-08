# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
ng serve              # dev server at http://localhost:4200
ng build              # production build → dist/jsonapp/
ng build --watch --configuration development   # watch mode
ng test               # Karma/Jasmine unit tests
ng generate component components/foo --skip-tests  # scaffold a standalone component with SCSS
```

For GitHub Pages deployment, build with:
```bash
ng build --base-href /your-repo-name/
```
Then copy `dist/jsonapp/index.html` → `dist/jsonapp/browser/404.html` before pushing.

## Architecture

This is a single-page, client-side-only Angular 20 app (no routing, no SSR, no backend). The full Technical Design Document lives in `README.md`.

### Reactivity model — Signals only

All shared state will live in `JsonStateService` (not yet created). Components read signals and computed values; they never write to signals that belong to another component. RxJS is present as a transitive dependency but is not used in application code.

### Component conventions

Angular 20 standalone components throughout — no NgModules. The scaffold uses the short filename convention (`app.ts` / `app.html` / `app.scss`) rather than the older `app.component.ts` style. New components generated via `ng generate` will follow the standard `.component.ts` suffix — this is fine.

### Planned component tree (not yet built)

```
AppComponent              ← 50/50 CSS Grid shell, no logic
├── LeftPaneComponent     ← Monaco JSON editor + Beautify + Submit buttons
├── RightPaneComponent    ← MatTabGroup (TS | Pydantic | JS Object) + error panel
│   └── OutputTabComponent (×3) ← read-only Monaco + Copy button
└── SubmitModalComponent  ← MatDialog, ReactiveFormsModule, GenerationConfig form
```

Planned services under `src/app/services/`:
- `JsonStateService` — single signal store (rawJson, parseResult, schemaTree, outputCache, activeTab, generationConfig)
- `TypeScriptGeneratorService`, `PydanticGeneratorService`, `JsObjectGeneratorService` — pure, stateless, return strings

Planned utilities under `src/app/utils/`:
- `json-parser.util.ts` — recursive `buildSchemaTree()` producing a `SchemaNode` AST
- `singularize.util.ts` — pluralized key → singular PascalCase type name
- `monaco-theme.util.ts` — registers the custom `utilityDark` Monaco theme

### Styling

**Do not use Angular Material M2 APIs** (`mat.define-palette`, `mat.define-dark-theme`). This project uses the M3 API exclusively via `mat.theme()` in `src/styles.scss`.

Custom SCSS design tokens are in `src/styles/_variables.scss` and must be imported via `@use '../styles/variables' as vars` (path is relative to the component's location). Never hard-code hex colors — always reference a token.

The global dialog override (`.utility-modal`) is in `src/styles.scss`. Pass `panelClass: 'utility-modal'` when opening `MatDialog`.

### Monaco editor (not yet installed)

Package to install: `ngx-monaco-editor-v2`. Monaco worker assets must be added to the `angular.json` assets array:
```json
{ "glob": "**/*", "input": "node_modules/monaco-editor/min/vs", "output": "assets/vs" }
```
Register the custom `utilityDark` theme on Monaco's `onInit` event in the left pane. Both editors (left input, right output) use this theme. Right-pane editors are `readOnly: true`.

### Key data contracts (not yet implemented)

`GenerationConfig` (output of SubmitModalComponent):
```ts
{ rootTypeName: string; pydanticVersion: 'v1'|'v2'; nullMode: 'global'|'per-field';
  globalNullType: 'string'|'number'|'boolean'|'combination';
  perFieldNullMap: Record<string, 'string'|'number'|'boolean'|'combination'>; }
```

`SchemaNode` (internal AST from json-parser.util):
```ts
{ key: string; typeName: string;
  kind: 'primitive'|'object'|'array'|'null'|'union'|'unknown';
  children: SchemaNode[]; itemType: SchemaNode | null; }
```

`OutputCache` (held in JsonStateService signal):
```ts
{ typescript: string|null; pydantic: string|null; jsObject: string|null; }
```
Cache is nulled on every Submit confirmation and lazily repopulated via `effect()` when a tab becomes active.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
ng serve              # dev server at http://localhost:4200
ng build              # production build → dist/jsonapp/
ng build --watch --configuration development   # watch mode
ng test               # Karma/Jasmine unit tests (90 tests, ChromeHeadless)
ng generate component components/foo --skip-tests  # scaffold a standalone component with SCSS
```

For GitHub Pages deployment:
```bash
npm run build:gh-pages   # builds with --base-href /JSONDevUtility/ and copies index.html → 404.html
```

## Architecture

TypeCast is a single-page, client-side-only Angular 21 app (no routing, no SSR, no backend). Full TDD lives in `README.md`.

### Reactivity model — Signals only

All shared state lives in `JsonStateService`. Components read signals and computed values; they never write to signals that belong to another component. RxJS is present as a transitive dependency but is not used in application code.

### Component tree

```
AppComponent              ← 3-row CSS Grid (header / left+right panes)
├── HeaderComponent       ← TypeCast wordmark + Help button
├── LeftPaneComponent     ← Monaco JSON editor, Beautify + indent toggle + Clear + Submit
├── RightPaneComponent    ← MatTabGroup (TS | Pydantic | JS Object) + error panel
│   └── OutputTabComponent (×3) ← read-only Monaco + Copy button
├── SubmitModalComponent  ← MatDialog, null fields + Advanced Options collapsible
└── HelpModalComponent    ← MatDialog, static usage instructions + beta warning
```

### Services

- `JsonStateService` — single signal store (`rawJson`, `parseResult`, `isValid`, `errorMsg`, `schemaTree`, `schemaTreePreview`, `outputCache`, `activeTab`, `generationConfig`). Methods: `applyConfig()`, `clearAll()`.
- `TypescriptGeneratorService`, `PydanticGeneratorService`, `JsObjectGeneratorService` — pure, stateless, return strings.

### Utilities

- `json-parser.util.ts` — `buildSchemaTree()`, `extractNullFields()`, `extractAllLeafFields()`
- `singularize.util.ts` — pluralized key → singular PascalCase type name
- `monaco-theme.util.ts` — registers the custom `utilityDark` Monaco theme

### Key data contracts

`GenerationConfig` (output of SubmitModalComponent):
```ts
{ rootTypeName: string; pydanticVersion: 'v1' | 'v2';
  fieldMap: Record<string, FieldConfig>; }
// fieldMap keys are full hierarchical dot-paths, e.g. "user.profile.age"
```

`FieldConfig`:
```ts
{ types: FieldType[]; optional: boolean; }
// FieldType = 'integer' | 'string' | 'float' | 'boolean' | 'datetime'
// empty types[] = unresolved null field
```

`SchemaNode` (internal AST from json-parser.util):
```ts
{ key: string; typeName: string;
  kind: 'primitive' | 'object' | 'array' | 'null' | 'union' | 'unknown';
  primitiveType?: FieldType;
  children: SchemaNode[]; itemType: SchemaNode | null;
  unionMembers?: string[]; }
```

`OutputCache`:
```ts
{ typescript: string | null; pydantic: string | null; jsObject: string | null; }
```
Cache is nulled on every Submit confirmation (`applyConfig()`) and on Clear (`clearAll()`). Lazily repopulated via `effect()` when a tab becomes active.

### Styling

**Do not use Angular Material M2 APIs** (`mat.define-palette`, `mat.define-dark-theme`). This project uses the M3 API exclusively via `mat.theme()` in `src/styles.scss`.

Custom SCSS design tokens are in `src/styles/_variables.scss` and must be imported via `@use '../styles/variables' as vars` (path is relative to the component's location). Never hard-code hex colors — always reference a token.

The global dialog override (`.utility-modal`) is in `src/styles.scss`. Always pass `panelClass: 'utility-modal'` when opening `MatDialog`.

### Monaco editor

Package: `ngx-monaco-editor-v2`. Assets served from `public/` via `angular.json` assets glob. The custom `utilityDark` theme is registered on editor `onInit` in the left pane. Both panes use this theme. Right-pane editors are `readOnly: true`.

### `schemaTreePreview` vs `schemaTree`

- `schemaTreePreview` — config-independent (always uses `'Root'` as type name). Used to extract null fields and all leaf fields before Submit.
- `schemaTree` — config-dependent (uses `config.rootTypeName`). Used only for code generation inside `effect()`.

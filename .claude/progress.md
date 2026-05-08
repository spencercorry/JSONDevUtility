# Project Progress Log
# JSON Developer Utility — Angular Client-Side App

---

## Completed

### Planning Session — 2026-05-07
- Full TDD scoped via 6 rounds of Q&A (architect planning mode)
- Decisions locked: Angular Signals, client-side only, Angular Material M3, Monaco editor, lazy tab output, Submit modal flow, dark/sharp/minimal UI, 50/50 split, manual gh-pages deploy
- `README.md` generated containing the complete Technical Design Document

### Phase 1 — Scaffold & Theme — 2026-05-08
- Angular 20.0.3 scaffolded: standalone components, SCSS, no routing, no SSR, git initialized
- `@angular/material@20.2.14` installed (M3 theming engine)
- `@angular/animations` installed (required peer dependency, matched to Angular 20)
- `src/styles/_variables.scss` created — 9 design tokens (surface, border, accent colors)
- `src/styles.scss` rewritten — M3 dark theme via `mat.theme()`, violet + cyan palette, Inter typography, density -1, global `.utility-modal` dialog override
- `src/index.html` updated — title set to "JSON Dev Utility", Inter + JetBrains Mono fonts added, Material Icons kept
- `src/app/app.config.ts` updated — `provideAnimationsAsync()` added
- `CLAUDE.md` initialized — commands, architecture overview, data contracts, styling rules
- `ng build` passes cleanly ✓

### Phase 2 — Monaco Integration & Left Pane — 2026-05-08
- Upgraded Angular 20 → 21.2 (required for ngx-monaco-editor-v2 compatibility)
- `ngx-monaco-editor-v2` installed
- Monaco worker assets added to `angular.json`
- `src/app/utils/monaco-theme.util.ts` created — `utilityDark` custom theme
- `src/app/components/left-pane/` created — Monaco JSON editor, Beautify + Submit buttons
- `src/app/services/json-state.service.ts` created — minimal `rawJson` + `isValid` signals
- `AppComponent` updated — 50/50 CSS Grid layout, right pane placeholder
- `provideMonacoEditor()` added to `app.config.ts`
- `ng build` passes cleanly ✓

---

### Phase 3 — JsonStateService & Signal Graph — 2026-05-08
- `src/app/models/generation-config.model.ts` created — `NullType`, `PydanticVersion`, `NullMode`, `OutputTab`, `SchemaKind`, `GenerationConfig`, `SchemaNode`, `OutputCache`, `ParseResult`
- `src/app/services/json-state.service.ts` expanded — full signal graph wired
  - Writable: `rawJson`, `generationConfig`, `activeTab`, `outputCache`
  - Computed: `parseResult` (try/catch JSON.parse with SyntaxError message), `isValid`, `errorMsg`, `schemaTree` (stubbed — returns null until Phase 4)
  - `applyConfig()` — nulls cache, sets new config
  - `effect()` — reads `activeTab`/`schemaTree`/`generationConfig`; skips if cache hit; calls stubbed `generate()` method
- `ng build` passes cleanly ✓

---

## TODO — Next Steps

### Phase 4 — Schema Parser Utilities — 2026-05-08
- `src/app/utils/singularize.util.ts` created — `singularize()`, `toPascalCase()`, `singularPascal()`
  - Handles irregular plurals (children→child, people→person, etc.), invariants (status, series, etc.)
  - Rules: ies→y, sses/xes/ches/shes→remove es, ses→remove es, ves→f, trailing s
  - `toPascalCase` handles camelCase, snake_case, kebab-case input keys
  - `singularPascal` splits camelCase words first, singularizes last word, then PascalCases all
- `src/app/utils/json-parser.util.ts` created — recursive `buildSchemaTree(value, key, typeName)`
  - Primitives: string, number (integer/float via `Number.isInteger`), boolean, null
  - Objects: recurse into children with `toPascalCase(childKey)` as typeName
  - Arrays: empty→unknown, all-objects→merge schemas, same type→representative, mixed→union node
  - `mergeObjects()` merges all array item objects (union of keys, prefer non-null values)
- `JsonStateService.schemaTree` wired — now calls `buildSchemaTree(result.value, '', config.rootTypeName)`
- `ng build` passes cleanly ✓

### Phase 5 — TypeScript Generator
- [ ] Create `src/app/services/typescript-generator.service.ts`
- [ ] `export interface` per object node, flat/separate (not nested namespaces)
- [ ] Root uses `rootTypeName`, nested use `PascalCase(key)`
- [ ] All fields required; null mapping per `GenerationConfig`
- [ ] Root-level array → item interface + `type RootName = ItemType[]`

### Phase 6 — Pydantic Generator
- [ ] Create `src/app/services/pydantic-generator.service.ts`
- [ ] v1: `BaseModel` + `Optional`, `List`, `Union`
- [ ] v2: adds `model_config = ConfigDict(strict=True)`
- [ ] Integer vs float detection via `Number.isInteger()`

### Phase 7 — JS Object Generator
- [ ] Create `src/app/services/js-object-generator.service.ts`
- [ ] Output: `const data = { ... }` with unquoted valid JS identifier keys
- [ ] String values use single quotes

### Phase 8 — Submit Modal
- [ ] Create `src/app/components/submit-modal/` component
- [ ] Root type name input (required, non-empty validator)
- [ ] Pydantic v1/v2 radio toggle
- [ ] Null mode toggle: Global vs Per-field
  - Global: single dropdown (string | null, number | null, boolean | null, combination)
  - Per-field: dynamic list from null-valued nodes in schema tree
- [ ] Returns `GenerationConfig` on confirm, `undefined` on dismiss

### Phase 9 — Right Pane & Output Tabs
- [ ] Create `src/app/components/right-pane/` component
- [ ] `MatTabGroup`: TypeScript, Pydantic, JS Object tabs
- [ ] Tabs disabled + greyed when `!isValid()`
- [ ] Error panel shown in tab body when invalid (line/col message)
- [ ] Create `src/app/components/output-tab/` component
  - Read-only Monaco editor per tab
  - Copy to Clipboard button (top-right, checkmark on success)
  - Spinner/skeleton while `content()` is null

### Phase 10 — Wire Everything Together
- [ ] Connect Submit button → modal → `applyConfig()` → lazy `effect()`
- [ ] Connect left pane editor changes → `rawJson` signal
- [ ] Confirm tab switching triggers generation correctly

### Phase 11 — Beautify & Error Snackbars
- [ ] Beautify: format in-place, snackbar `"Cannot beautify — fix JSON errors first."` if invalid
- [ ] Clipboard failure snackbar: `"Copy failed. Please select and copy manually."`
- [ ] Generator catch-all: output `// Generation error: <msg>` in tab

### Phase 12 — Models File
- [ ] Create `src/app/models/generation-config.model.ts` — `GenerationConfig`, `SchemaNode`, `OutputCache` TypeScript interfaces

### Phase 13 — Polish
- [ ] Disabled tab label opacity + `cursor: not-allowed` styles
- [ ] Copy button transition (icon swap to checkmark, revert after 2s)
- [ ] Smooth tab switch transitions

### Phase 14 — Build Config & Deploy Prep
- [ ] Set `baseHref` in `angular.json` for GitHub Pages repo name
- [ ] Add Monaco assets to `angular.json` assets array (if not done in Phase 2)
- [ ] Verify `404.html` copy step for GitHub Pages
- [ ] Final `ng build` clean pass

---

## Architecture Quick Reference

- **State**: All in `JsonStateService` via Signals. Components only read.
- **Output generation**: Lazy via `effect()`, cached in `outputCache` signal, nulled on Submit.
- **Styling**: M3 only (`mat.theme()`). SCSS tokens in `src/styles/_variables.scss`. Import as `@use '../styles/variables' as vars`.
- **Monaco theme**: Custom `utilityDark` registered on editor `onInit`. Both panes use it.
- **Dialog**: Always pass `panelClass: 'utility-modal'` to `MatDialog.open()`.

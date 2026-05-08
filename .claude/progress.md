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
- `src/styles/_variables.scss` created — 9 design tokens (surface, border, accent colors)
- `src/styles.scss` rewritten — M3 dark theme via `mat.theme()`, violet + cyan palette, Inter typography, density -1, global `.utility-modal` dialog override
- `src/index.html` updated — title "JSON Dev Utility", Inter + JetBrains Mono fonts
- `CLAUDE.md` initialized
- `ng build` passes cleanly ✓

### Phase 2 — Monaco Integration & Left Pane — 2026-05-08
- Upgraded Angular 20 → 21.2 (required for ngx-monaco-editor-v2 compatibility)
- `ngx-monaco-editor-v2` installed; Monaco worker assets added to `angular.json`
- `src/app/utils/monaco-theme.util.ts` — `utilityDark` custom theme
- `src/app/components/left-pane/` — Monaco JSON editor, Beautify + Submit buttons
- `AppComponent` — 50/50 CSS Grid layout
- `provideMonacoEditor()` added to `app.config.ts`
- **Bug fix**: removed `[ngModel]` binding; replaced with native Monaco API
  (`onDidChangeModelContent` + `effect()` guard) — fixed cursor reset on every keystroke
- **Bug fix**: `baseUrl: 'assets/vs'` (not `'assets'`) — fixed Monaco not rendering;
  `ngx-monaco-editor-v2` internally overrides `baseUrl === "assets"` to a nonexistent path
- `ng build` passes cleanly ✓

### Phase 3 — JsonStateService & Signal Graph — 2026-05-08
- `src/app/models/generation-config.model.ts` — all core types
- `src/app/services/json-state.service.ts` — full signal graph
  - Writable: `rawJson`, `generationConfig`, `activeTab`, `outputCache`
  - Computed: `parseResult`, `isValid`, `errorMsg`, `schemaTree`, `schemaTreePreview`
  - `applyConfig()` — resets cache, sets config
  - `effect()` — lazy generation per active tab with cache-hit guard
- `ng build` passes cleanly ✓

### Phase 4 — Schema Parser Utilities — 2026-05-08
- `src/app/utils/singularize.util.ts` — `singularize()`, `toPascalCase()`, `singularPascal()`
- `src/app/utils/json-parser.util.ts` — recursive `buildSchemaTree()` + `extractNullFields()`
- `ng build` passes cleanly ✓

### Phase 5 — TypeScript Generator — 2026-05-08
- `src/app/services/typescript-generator.service.ts`
  - Flat `export interface` declarations, root first; dedup via `seen` Set
  - Root arrays, primitives, unions all handled
  - Null fields resolved via `nullMode` / `globalNullType` / `perFieldNullMap`
  - Special-char keys quoted; try/catch → `// Generation error: ...`
- `ng build` passes cleanly ✓

### Phase 6 — Pydantic Generator — 2026-05-08
- `src/app/services/pydantic-generator.service.ts`
  - Dependency-first class ordering (children before parents)
  - v1/v2 support; dynamic `from typing import ...` only for used types
  - Null fields → `Optional[...]` + `= None`; field name sanitization
  - try/catch → `# Generation error: ...`
- `ng build` passes cleanly ✓

### Phase 7 — JS Object Generator — 2026-05-08
- `src/app/services/js-object-generator.service.ts`
  - Operates on raw parsed value (not schema tree)
  - Single-quoted strings, unquoted valid JS identifier keys, 2-space indent
  - try/catch → `// Generation error: ...`
- `ng build` passes cleanly ✓

### Phase 8 — Submit Modal — 2026-05-08
- `src/app/components/submit-modal/` — `SubmitModalComponent` + `SubmitModalData`
  - Reactive form: root type name, pydantic version, null mode, per-field null map
  - `MatButtonToggleGroup` for version + null mode; dynamic per-field selects
  - Closes with `GenerationConfig | undefined`
- `ng build` passes cleanly ✓

### Phase 9 — Right Pane & Output Tabs — 2026-05-08
- `src/app/components/right-pane/` — `MatTabGroup` (TypeScript / Pydantic / JS Object)
  - Tabs disabled when JSON invalid; error panel shows parse error message
- `src/app/components/output-tab/` — read-only Monaco editor per tab
  - Copy-to-clipboard button with 2s checkmark feedback
  - Empty-state prompt before first Submit
- `ng build` passes cleanly ✓

### Phase 10 — Wire Everything Together — 2026-05-08
- Submit button opens `SubmitModalComponent` with null fields from `schemaTreePreview`
- `afterClosed()` calls `jsonState.applyConfig(config)` → resets cache → triggers lazy `effect()`
- **Bug fix**: `submit()` now uses `schemaTreePreview` (config-independent) instead of
  `schemaTree` — fixed Submit doing nothing before first submission (config was null)
- `ng build` passes cleanly ✓

### Phases 11 + 12 + 13 — Polish — 2026-05-08
- Phase 11 (snackbars + catch-alls): all implemented in earlier phases
- Phase 12 (models file): implemented in Phase 3
- Phase 13: disabled tab labels styled with reduced opacity + `cursor: not-allowed`
- `ng build` passes cleanly ✓

### Phase 14 — Build Config & Deploy Prep — 2026-05-08
- Initial bundle budget raised to 1MB warning / 2MB error (~675kB actual)
- `build:gh-pages` script added to `package.json`:
  `ng build --base-href /REPO-NAME/ && node -e "...copyFileSync index.html → 404.html"`
  Replace `REPO-NAME` with the actual GitHub repository name before deploying
- Monaco assets already in `angular.json` assets array from Phase 2
- `ng build` passes cleanly ✓ (no warnings)

---

## TODO — Next Steps

### Pending
- Set GitHub remote and replace `REPO-NAME` in `build:gh-pages` script
- User-requested edits / feature suggestions

---

## Architecture Quick Reference

- **State**: All in `JsonStateService` via Signals. Components only read.
- **Output generation**: Lazy via `effect()`, cached in `outputCache` signal, nulled on Submit.
- **Styling**: M3 only (`mat.theme()`). SCSS tokens in `src/styles/_variables.scss`. Import as `@use '../styles/variables' as vars`.
- **Monaco theme**: Custom `utilityDark` registered on editor `onInit`. Both panes use it.
- **Dialog**: Always pass `panelClass: 'utility-modal'` to `MatDialog.open()`.
- **`schemaTreePreview`**: config-independent tree used for null field extraction in Submit flow.
  `schemaTree` (config-dependent) is used only for generation inside `effect()`.

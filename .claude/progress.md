# Project Progress Log
# TypeCast — Angular Client-Side App

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
- **Bug fix**: removed `[ngModel]` binding; replaced with native Monaco API (`onDidChangeModelContent` + `effect()` guard) — fixed cursor reset on every keystroke
- **Bug fix**: `baseUrl: 'assets/vs'` (not `'assets'`) — fixed Monaco not rendering
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
  - Special-char keys quoted; try/catch → `// Generation error: ...`
- `ng build` passes cleanly ✓

### Phase 6 — Pydantic Generator — 2026-05-08
- `src/app/services/pydantic-generator.service.ts`
  - Dependency-first class ordering (children before parents)
  - v1/v2 support; dynamic `from typing import ...` only for used types
  - Field name sanitization (hyphens → underscores, digit-leading → `_` prefix)
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
- **Bug fix**: `submit()` now uses `schemaTreePreview` (config-independent) instead of `schemaTree` — fixed Submit doing nothing before first submission (config was null)
- `ng build` passes cleanly ✓

### Phases 11 + 12 + 13 — Polish — 2026-05-08
- Phase 11 (snackbars + catch-alls): all implemented in earlier phases
- Phase 12 (models file): implemented in Phase 3
- Phase 13: disabled tab labels styled with reduced opacity + `cursor: not-allowed`
- `ng build` passes cleanly ✓

### Phase 14 — Build Config & Deploy Prep — 2026-05-08
- Initial bundle budget raised to 1MB warning / 2MB error (~675kB actual)
- `build:gh-pages` script added to `package.json` for `/JSONDevUtility/` base-href
- **Deploy command**: `npx ng deploy --base-href=/JSONDevUtility/` (do NOT use the build:gh-pages script + manual git push approach)
- Monaco assets already in `angular.json` assets array from Phase 2
- `ng build` passes cleanly ✓ (no warnings)

### Phase A — Model Types Rework — 2026-05-10
- Replaced old `NullType` / `nullMode` / `globalNullType` / `perFieldNullMap` with:
  - `FieldType = 'integer' | 'string' | 'float' | 'boolean' | 'datetime'`
  - `FieldConfig { types: FieldType[], optional: boolean }`
  - `GenerationConfig.fieldMap: Record<string, FieldConfig>` (keys = full hierarchical dot-paths)
- `ng build` passes cleanly ✓

### Phase B — Parser Util Fixes — 2026-05-10
- `extractNullFields()` updated to return full hierarchical dot-paths
- New `extractAllLeafFields()` — returns `Record<string, FieldType[]>` for all leaf nodes
- **Bug fix (Bug B)**: replaced raw-value `mergeObjects()` with schema-level `mergeObjectSchemas()`; added `arrayNodes` bucket so array-typed fields stay typed (e.g. `string[]` instead of `unknown`); conflicting types across array items produce `kind: 'union'` nodes
- `ng build` passes cleanly ✓

### Phase C — Generator Rework — 2026-05-10
- All 3 generators updated to consume `GenerationConfig.fieldMap` for type overrides
- Datetime support: TS → `string`, Pydantic → `datetime` + `from datetime import datetime`
- Union types: TS → `T1 | T2`, Pydantic → `Union[T1, T2]`
- Optional flag: TS → `key?:`, Pydantic → `Optional[T] = None`
- **Bug fix (Bug A)**: root name collision guard — child type name matching `rootTypeName` gets `Item` suffix appended
- **Bug fix**: Pydantic was wrapping all fields in `Optional` — fixed `fieldConfigToPy()` to return bare type; null branch now explicitly adds `Optional`
- `ng build` passes cleanly ✓

### Phase D — JsonStateService Updates — 2026-05-10
- Added `clearAll()`: resets `rawJson('')`, `generationConfig(null)`, `outputCache({ all: null })`
- `schemaTreePreview` computed now feeds both `nullFields` and `allLeafFields` to the modal
- Modal receives `previousFieldMap` + `previousRootTypeName` for session memory

### Phase E — Submit Modal Rework — 2026-05-10
- Full modal rewrite:
  - **Null Fields** section (always visible): type toggle buttons start unselected; Generate disabled until each null field has ≥1 type selected; null fields default `optional: true`
  - **Advanced Options** (collapsible): all leaf fields with inferred types pre-selected; user may adjust types or mark optional for union building
  - Session memory: reopening modal restores previous root type name, field types, and optional flags
- Modal width: `width: '820px', maxWidth: '95vw'` — prevents horizontal overflow
- `ng build` passes cleanly ✓

### Phase F — Left Pane Polish — 2026-05-10
- Action bar rearranged: `[Beautify] [Indent 2|4]  ·····  [Clear] [Submit]`
- Indent size toggle: local `signal<2 | 4>(2)`; switching triggers reactive beautify if JSON is valid
- Indent label + MatTooltip explaining the control
- Clear button: visible only after first Submit; calls `jsonState.clearAll()`
- **Bug fix**: toggle button text vertically centered via `::ng-deep` SCSS overrides
- `ng build` passes cleanly ✓

### Phase G — Header + Help Modal — 2026-05-10
- `src/app/components/header/` — 48px fixed bar
  - Left: TypeCast wordmark (`Type` italic/white, `Cast` violet accent)
  - Right: `?` circular button → opens HelpModalComponent
- `src/app/components/help-modal/` — 7-step usage instructions
- `AppComponent` layout updated to 3-row grid (`auto 1fr`, header `grid-column: 1 / -1`)
- `ng build` passes cleanly ✓

### Phase H — Unit Tests — 2026-05-10
- **90 tests total**, all passing (ChromeHeadless)
- `src/app/utils/json-parser.util.spec.ts` (30 tests): `buildSchemaTree` primitives/objects/arrays, `mergeObjectSchemas` Bug B fix, `extractNullFields`, `extractAllLeafFields`
- `src/app/services/typescript-generator.service.spec.ts` (16 tests): primitives, null fields, optional, datetime, unions, nested objects, root arrays, root collision, 3-level nesting, array-of-objects fields, heterogeneous array unions
- `src/app/services/pydantic-generator.service.spec.ts` (19 tests): primitives, v1/v2, null fields, optional, datetime, unions, nested objects, root arrays, root collision, field name sanitization, empty nested class, List[ChildClass]
- `src/app/services/js-object-generator.service.spec.ts` (15 tests): variable naming, primitives, key formatting, object structure, arrays, root array, string escaping, error handling, backslash escaping, falsy values
- `src/app/app.spec.ts` (1 test): component creation with `provideMonacoEditor()`

### Branding & Polish — 2026-05-10
- App renamed from "JSON Developer Utility" to **TypeCast**
- `public/favicon.svg` — TC monogram on dark rounded-rect background
- `src/index.html` — title updated to "TypeCast"; SVG favicon added as primary, `.ico` as fallback
- Help modal: beta warning banner added at bottom (red-accented callout)
- README, CLAUDE.md, and progress.md updated to reflect current state

---

## TODO — Next Steps

### TODO-1: Nullable vs Optional distinction

**Problem:** The app currently conflates two distinct concepts:
- `error_code?: string` — the field may be absent from the object entirely (optional key)
- `error_code: string | null` — the field is always present but its value can be null (nullable value)

**Required changes:**

#### A. Add `nullable` as a field attribute in the modal
- Add a **Nullable** checkbox/button alongside the existing **Optional** checkbox on each field row
- `nullable: true` means the value can be null — adds `null` to the type union
- Nullable requires ≥1 primitive type to also be selected (cannot select nullable alone — `null` is not a standalone type)
- Generate disabled if any field has only `nullable` checked with no primitive types

#### B. Update `FieldConfig` model
```ts
export interface FieldConfig {
  types:    FieldType[];   // primitive types (unchanged)
  nullable: boolean;       // value can be null → adds null to union
  optional: boolean;       // key may be absent → adds ? / = None
}
```

#### C. Update generators to respect the distinction

| Combination | TypeScript output | Pydantic output |
|---|---|---|
| `optional: false, nullable: false` | `field: string` | `field: str` |
| `optional: true, nullable: false` | `field?: string` | `field: Optional[str] = None` |
| `optional: false, nullable: true` | `field: string \| null` | `field: str \| None` |
| `optional: true, nullable: true` | `field?: string \| null` | `field: Optional[str] = None` |

Note: In Pydantic, `Optional[str]` is equivalent to `str | None`, so the nullable-only case should use `str | None` without `= None` to make the intent clear (field must be provided, just can be null).

#### D. Update parser inference
- Currently, a `null` JSON value produces `kind: 'null'` in the schema tree, which becomes "unresolved" in the modal. Instead, `null` values in the JSON should still produce `kind: 'null'` (user must pick types), but the `nullable` flag should default to `true` since we know the value is null in the sample.

---

### TODO-2: Infer optional fields from inconsistent object shapes

**Problem:** When an array of same-type objects has inconsistent keys (e.g., some objects have `error_code` and others don't), the field is currently not recognized as optional — it either gets merged normally or produces unexpected output.

**Example:**
```json
[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob", "error_code": "E001" }
]
```
→ `error_code` should be inferred as `optional: true` because it only appears in some objects.

**Required changes:**

#### A. Update `mergeObjectSchemas()` in `json-parser.util.ts`
- Track which fields appear in all objects vs only some objects
- Fields present in fewer objects than the total count → mark as optional in the merged node
- Add an `inferredOptional?: boolean` flag to `SchemaNode`, set by the merge step

#### B. Update `extractAllLeafFields()` to surface the flag
- Return `{ types: FieldType[], inferredOptional: boolean }` per field instead of just `FieldType[]`
  (or keep types flat and pass optional inference separately)

#### C. Pre-select Optional in the modal for inferred-optional fields
- In the Advanced Options section, if a field was inferred as optional, pre-check the Optional button
- User can still uncheck it manually

#### D. Update tests
- `json-parser.util.spec.ts`: add cases for missing keys across merged objects
- Generator specs: add cases for inferred-optional fields flowing through to output

---

### Decisions Needed Before Implementation
- Should Pydantic nullable-only (`nullable: true, optional: false`) use `str | None` (explicit) or `Optional[str]` (shorthand)? Leaning toward `str | None` to distinguish from optional.
- Should the `nullable` and `optional` checkboxes in the modal be independent, or should checking `optional` auto-check `nullable` as a common default? Leaning toward independent.

---

## Architecture Quick Reference

- **State**: All in `JsonStateService` via Signals. Components only read.
- **Output generation**: Lazy via `effect()`, cached in `outputCache` signal, nulled on Submit/Clear.
- **Styling**: M3 only (`mat.theme()`). SCSS tokens in `src/styles/_variables.scss`. Import as `@use '../styles/variables' as vars`.
- **Monaco theme**: Custom `utilityDark` registered on editor `onInit`. Both panes use it.
- **Dialog**: Always pass `panelClass: 'utility-modal'` to `MatDialog.open()`.
- **`schemaTreePreview`**: config-independent tree (type name `'Root'`) used for null field and leaf field extraction before Submit.
- **`schemaTree`**: config-dependent (uses `config.rootTypeName`), used only inside `effect()` for generation.
- **fieldMap keys**: full hierarchical dot-paths (e.g. `"user.profile.age"`); generators look up this path to apply type overrides and optional flags.
- **Static assets**: served from `public/` directory (Angular 21+ convention).

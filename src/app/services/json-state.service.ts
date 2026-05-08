import { Injectable, computed, effect, signal, untracked } from '@angular/core';
import {
  GenerationConfig,
  OutputCache,
  OutputTab,
  ParseResult,
  SchemaNode,
} from '../models/generation-config.model';

@Injectable({ providedIn: 'root' })
export class JsonStateService {
  readonly rawJson = signal<string>('');
  readonly generationConfig = signal<GenerationConfig | null>(null);
  readonly activeTab = signal<OutputTab>('typescript');
  readonly outputCache = signal<OutputCache>({ typescript: null, pydantic: null, jsObject: null });

  readonly parseResult = computed<ParseResult>(() => {
    const raw = this.rawJson().trim();
    if (!raw) return { ok: false, error: 'No input.' };
    try {
      const value = JSON.parse(raw);
      return { ok: true, value };
    } catch (e: unknown) {
      return { ok: false, error: e instanceof SyntaxError ? e.message : String(e) };
    }
  });

  readonly isValid = computed(() => this.parseResult().ok);

  readonly errorMsg = computed<string | null>(() => {
    const result = this.parseResult();
    return result.ok ? null : (result.error ?? null);
  });

  readonly schemaTree = computed<SchemaNode | null>(() => {
    const result = this.parseResult();
    if (!result.ok) return null;
    // Populated in Phase 4 when buildSchemaTree() is wired in
    return null;
  });

  constructor() {
    effect(() => {
      const tab = this.activeTab();
      const tree = this.schemaTree();
      const config = this.generationConfig();

      if (!tree || !config) return;

      const cache = untracked(() => this.outputCache());
      if (cache[tab] !== null) return;

      const output = this.generate(tab, tree, config);
      this.outputCache.update(c => ({ ...c, [tab]: output }));
    });
  }

  applyConfig(config: GenerationConfig): void {
    this.outputCache.set({ typescript: null, pydantic: null, jsObject: null });
    this.generationConfig.set(config);
  }

  private generate(tab: OutputTab, _tree: SchemaNode, _config: GenerationConfig): string {
    // Generators wired in Phase 5–7
    return `// ${tab} generation coming soon`;
  }
}

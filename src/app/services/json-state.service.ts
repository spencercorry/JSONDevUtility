import { Injectable, computed, effect, inject, signal, untracked } from '@angular/core';
import {
  GenerationConfig,
  OutputCache,
  OutputTab,
  ParseResult,
  SchemaNode,
} from '../models/generation-config.model';
import { buildSchemaTree } from '../utils/json-parser.util';
import { TypescriptGeneratorService } from './typescript-generator.service';

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
    const config = this.generationConfig();
    if (!result.ok || !config) return null;
    return buildSchemaTree(result.value, '', config.rootTypeName);
  });

  private readonly tsGenerator = inject(TypescriptGeneratorService);

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

  private generate(tab: OutputTab, tree: SchemaNode, config: GenerationConfig): string {
    switch (tab) {
      case 'typescript': return this.tsGenerator.generate(tree, config);
      case 'pydantic':   return '# Pydantic generation coming soon';
      case 'jsObject':   return '// JS Object generation coming soon';
    }
  }
}

import { Injectable } from '@angular/core';
import { GenerationConfig, SchemaNode } from '../models/generation-config.model';
import { singularPascal } from '../utils/singularize.util';

@Injectable({ providedIn: 'root' })
export class TypescriptGeneratorService {
  generate(tree: SchemaNode, config: GenerationConfig): string {
    try {
      const parts: string[] = [];
      const seen = new Set<string>();
      const rootName = config.rootTypeName;

      if (tree.kind === 'array') {
        const { itemType } = tree;
        if (itemType?.kind === 'object') {
          const itemName = deriveItemName(rootName);
          this.collectInterfaces({ ...itemType, typeName: itemName }, config, parts, seen);
          parts.push(`export type ${rootName} = ${itemName}[];`);
        } else {
          const inner = itemType ? this.typeStr(itemType, config, '') : 'unknown';
          const wrapped = itemType?.kind === 'union' ? `(${inner})` : inner;
          parts.push(`export type ${rootName} = ${wrapped}[];`);
        }
      } else if (tree.kind === 'object') {
        this.collectInterfaces(tree, config, parts, seen);
      } else {
        parts.push(`export type ${rootName} = ${this.typeStr(tree, config, '')};`);
      }

      return parts.join('\n\n');
    } catch (e: unknown) {
      return `// Generation error: ${e instanceof Error ? e.message : String(e)}`;
    }
  }

  private collectInterfaces(
    node: SchemaNode,
    config: GenerationConfig,
    out: string[],
    seen: Set<string>
  ): void {
    if (node.kind === 'object') {
      if (seen.has(node.typeName)) return;
      seen.add(node.typeName);
      out.push(this.buildInterface(node, config));
      for (const child of node.children) {
        this.collectInterfaces(child, config, out, seen);
      }
    } else if (node.kind === 'array' && node.itemType) {
      this.collectInterfaces(node.itemType, config, out, seen);
    }
  }

  private buildInterface(node: SchemaNode, config: GenerationConfig): string {
    const props = node.children
      .map(child => `  ${fmtKey(child.key)}: ${this.typeStr(child, config, child.key)};`)
      .join('\n');
    return `export interface ${node.typeName} {\n${props}\n}`;
  }

  private typeStr(node: SchemaNode, config: GenerationConfig, fieldPath: string): string {
    switch (node.kind) {
      case 'primitive':
        return node.primitiveType === 'integer' || node.primitiveType === 'float'
          ? 'number'
          : (node.primitiveType ?? 'unknown');
      case 'null':
        return nullTypeStr(config, fieldPath);
      case 'object':
        return node.typeName;
      case 'array': {
        if (!node.itemType) return 'unknown[]';
        const inner = this.typeStr(node.itemType, config, fieldPath);
        return node.itemType.kind === 'union' ? `(${inner})[]` : `${inner}[]`;
      }
      case 'union': {
        const members = (node.unionMembers ?? []).map(m => {
          if (m === 'null') return nullTypeStr(config, fieldPath);
          if (m === 'integer' || m === 'float') return 'number';
          return m;
        });
        return members.join(' | ');
      }
      case 'unknown':
        return 'unknown';
    }
  }
}

function deriveItemName(rootName: string): string {
  const sing = singularPascal(rootName);
  return sing !== rootName ? sing : `${rootName}Item`;
}

function nullTypeStr(config: GenerationConfig, fieldPath: string): string {
  const t =
    config.nullMode === 'global'
      ? config.globalNullType
      : (config.perFieldNullMap[fieldPath] ?? config.globalNullType);
  switch (t) {
    case 'string':      return 'string | null';
    case 'number':      return 'number | null';
    case 'boolean':     return 'boolean | null';
    case 'combination': return 'string | number | boolean | null';
  }
}

function fmtKey(key: string): string {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `"${key}"`;
}

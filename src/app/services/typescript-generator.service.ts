import { Injectable } from '@angular/core';
import { FieldConfig, FieldType, GenerationConfig, SchemaNode } from '../models/generation-config.model';
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
          const itemName = disambiguate(deriveItemName(rootName), rootName);
          this.collectInterfaces({ ...itemType, typeName: itemName }, config, parts, seen, '', rootName);
          parts.push(`export type ${rootName} = ${itemName}[];`);
        } else {
          const inner = itemType ? this.typeStr(itemType, config, '', rootName) : 'unknown';
          const wrapped = itemType?.kind === 'union' ? `(${inner})` : inner;
          parts.push(`export type ${rootName} = ${wrapped}[];`);
        }
      } else if (tree.kind === 'object') {
        this.collectInterfaces({ ...tree, typeName: rootName }, config, parts, seen, '', rootName);
      } else {
        parts.push(`export type ${rootName} = ${this.typeStr(tree, config, '', rootName)};`);
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
    seen: Set<string>,
    basePath: string,
    rootName: string
  ): void {
    if (node.kind === 'object') {
      if (seen.has(node.typeName)) return;
      seen.add(node.typeName);
      out.push(this.buildInterface(node, config, basePath, rootName));
      for (const child of node.children) {
        const childPath = basePath ? `${basePath}.${child.key}` : child.key;
        const resolvedChild =
          child.kind === 'object'
            ? { ...child, typeName: disambiguate(child.typeName, rootName) }
            : child;
        this.collectInterfaces(resolvedChild, config, out, seen, childPath, rootName);
      }
    } else if (node.kind === 'array' && node.itemType) {
      // Pass basePath unchanged so the itemType's children inherit the array's path as prefix.
      this.collectInterfaces(node.itemType, config, out, seen, basePath, rootName);
    }
  }

  private buildInterface(
    node: SchemaNode,
    config: GenerationConfig,
    basePath: string,
    rootName: string
  ): string {
    const props = node.children
      .map(child => {
        const childPath = basePath ? `${basePath}.${child.key}` : child.key;
        const fieldCfg = config.fieldMap[childPath];
        const optional = fieldCfg?.optional ?? false;
        const key = fmtKey(child.key) + (optional ? '?' : '');
        return `  ${key}: ${this.typeStr(child, config, childPath, rootName)};`;
      })
      .join('\n');
    return `export interface ${node.typeName} {\n${props}\n}`;
  }

  private typeStr(
    node: SchemaNode,
    config: GenerationConfig,
    fieldPath: string,
    rootName: string
  ): string {
    // fieldMap overrides take priority for all leaf nodes (not object/array).
    if (node.kind !== 'object' && node.kind !== 'array') {
      const fieldCfg = config.fieldMap[fieldPath];
      if (fieldCfg?.types.length) return fieldConfigToTs(fieldCfg);
    }

    switch (node.kind) {
      case 'primitive':
        return fieldTypeToTs(node.primitiveType);
      case 'null':
        return 'unknown';
      case 'object':
        return disambiguate(node.typeName, rootName);
      case 'array': {
        if (!node.itemType) return 'unknown[]';
        const inner = this.typeStr(node.itemType, config, fieldPath, rootName);
        return node.itemType.kind === 'union' ? `(${inner})[]` : `${inner}[]`;
      }
      case 'union': {
        const members = (node.unionMembers ?? []).map(m =>
          m === 'null' ? 'unknown' : fieldTypeToTs(m as FieldType)
        );
        return [...new Set(members)].join(' | ');
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

// Prevents a child object from sharing its type name with the root interface.
function disambiguate(typeName: string, rootName: string): string {
  return typeName === rootName ? `${typeName}Item` : typeName;
}

function fieldTypeToTs(ft: string | undefined): string {
  switch (ft) {
    case 'integer':
    case 'float':
    case 'number':   return 'number';
    case 'boolean':  return 'boolean';
    case 'string':
    case 'datetime': return 'string';
    default:         return 'unknown';
  }
}

function fieldConfigToTs(cfg: FieldConfig): string {
  const types = [...new Set(cfg.types.map(fieldTypeToTs))];
  return types.join(' | ');
}

function fmtKey(key: string): string {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `"${key}"`;
}

import { Injectable } from '@angular/core';
import { FieldConfig, FieldType, GenerationConfig, SchemaNode } from '../models/generation-config.model';

@Injectable({ providedIn: 'root' })
export class PydanticGeneratorService {
  generate(tree: SchemaNode, config: GenerationConfig): string {
    try {
      const classes: string[] = [];
      const seen = new Set<string>();
      const imports = new Set<string>();
      const datetime = { needed: false };
      const rootName = config.rootTypeName;

      if (tree.kind === 'array') {
        const { itemType } = tree;
        if (itemType?.kind === 'object') {
          const itemName = disambiguate(deriveItemName(rootName), rootName);
          this.collectClasses({ ...itemType, typeName: itemName }, config, classes, seen, imports, datetime, '', rootName);
          imports.add('List');
          classes.push(`${rootName} = List[${itemName}]`);
        } else {
          const inner = itemType ? this.typeStr(itemType, config, '', imports, datetime, rootName) : 'Any';
          if (!itemType) imports.add('Any');
          imports.add('List');
          classes.push(`${rootName} = List[${inner}]`);
        }
      } else if (tree.kind === 'object') {
        this.collectClasses({ ...tree, typeName: rootName }, config, classes, seen, imports, datetime, '', rootName);
      } else {
        classes.push(`${rootName} = ${this.typeStr(tree, config, '', imports, datetime, rootName)}`);
      }

      return buildOutput(classes, imports, datetime.needed, config);
    } catch (e: unknown) {
      return `# Generation error: ${e instanceof Error ? e.message : String(e)}`;
    }
  }

  private collectClasses(
    node: SchemaNode,
    config: GenerationConfig,
    out: string[],
    seen: Set<string>,
    imports: Set<string>,
    datetime: { needed: boolean },
    basePath: string,
    rootName: string
  ): void {
    if (node.kind === 'object') {
      if (seen.has(node.typeName)) return;
      seen.add(node.typeName);
      // Children-first (dependency-first) ordering: recurse before pushing this class.
      for (const child of node.children) {
        const childPath = basePath ? `${basePath}.${child.key}` : child.key;
        const resolvedChild =
          child.kind === 'object'
            ? { ...child, typeName: disambiguate(child.typeName, rootName) }
            : child;
        this.collectClasses(resolvedChild, config, out, seen, imports, datetime, childPath, rootName);
      }
      out.push(this.buildClass(node, config, imports, datetime, basePath, rootName));
    } else if (node.kind === 'array' && node.itemType) {
      this.collectClasses(node.itemType, config, out, seen, imports, datetime, basePath, rootName);
    }
  }

  private buildClass(
    node: SchemaNode,
    config: GenerationConfig,
    imports: Set<string>,
    datetime: { needed: boolean },
    basePath: string,
    rootName: string
  ): string {
    const fieldLines = node.children.map(child => {
      const childPath = basePath ? `${basePath}.${child.key}` : child.key;
      const fieldCfg = config.fieldMap[childPath];
      let isOptional = fieldCfg?.optional ?? false;
      const isNullable = fieldCfg?.nullable ?? false;

      // For unresolved null fields with no types, fall back to Optional[Any] = None.
      let baseType: string;
      if (child.kind === 'null' && !fieldCfg?.types.length) {
        imports.add('Any');
        baseType = 'Any';
        isOptional = true;  // sensible fallback when field type is unknown
      } else {
        baseType = this.typeStr(child, config, childPath, imports, datetime, rootName);
      }

      // 4-combination nullable/optional matrix.
      let typeStr: string;
      let defaultVal = '';
      if (isOptional) {
        imports.add('Optional');
        typeStr = `Optional[${baseType}]`;
        defaultVal = ' = None';
      } else if (isNullable) {
        typeStr = `${baseType} | None`;
      } else {
        typeStr = baseType;
      }

      return `    ${pyField(child.key)}: ${typeStr}${defaultVal}`;
    });

    const bodyLines: string[] = [];
    if (config.strictMode) {
      bodyLines.push('    model_config = ConfigDict(strict=True)');
    }
    bodyLines.push(...fieldLines);
    if (bodyLines.length === 0) bodyLines.push('    pass');

    return `class ${node.typeName}(BaseModel):\n${bodyLines.join('\n')}`;
  }

  private typeStr(
    node: SchemaNode,
    config: GenerationConfig,
    fieldPath: string,
    imports: Set<string>,
    datetime: { needed: boolean },
    rootName: string
  ): string {
    // fieldMap overrides take priority for all leaf nodes (not object/array).
    if (node.kind !== 'object' && node.kind !== 'array') {
      const fieldCfg = config.fieldMap[fieldPath];
      if (fieldCfg?.types.length) {
        const base = fieldConfigToPy(fieldCfg, imports, datetime);
        // Null elements in an array union are always preserved — the user cannot remove them via the modal.
        const hasNullElement = node.kind === 'union' && (node.unionMembers?.includes('null') ?? false);
        if (hasNullElement) { imports.add('Optional'); return `Optional[${base}]`; }
        return base;
      }
    }

    switch (node.kind) {
      case 'primitive':
        return fieldTypeToPy(node.primitiveType, datetime);
      case 'null':
        imports.add('Any');
        return 'Any';
      case 'object':
        return disambiguate(node.typeName, rootName);
      case 'array': {
        imports.add('List');
        if (!node.itemType) {
          imports.add('Any');
          return 'List[Any]';
        }
        const inner = this.typeStr(node.itemType, config, fieldPath, imports, datetime, rootName);
        return `List[${inner}]`;
      }
      case 'union': {
        const members = (node.unionMembers ?? []).map(m => memberToPy(m, imports, datetime));
        const hasNone = members.includes('None');
        const nonNone = members.filter(m => m !== 'None');
        if (hasNone) {
          imports.add('Optional');
          if (nonNone.length === 1) return `Optional[${nonNone[0]}]`;
          imports.add('Union');
          return `Optional[Union[${nonNone.join(', ')}]]`;
        }
        imports.add('Union');
        return `Union[${members.join(', ')}]`;
      }
      case 'unknown':
        imports.add('Any');
        return 'Any';
    }
  }
}

function buildOutput(
  classes: string[],
  imports: Set<string>,
  needsDatetime: boolean,
  config: GenerationConfig
): string {
  const typingImports = ['Optional', 'List', 'Union', 'Any'].filter(i => imports.has(i));
  const pydanticImports =
    config.strictMode ? ['BaseModel', 'ConfigDict'] : ['BaseModel'];

  const importLines: string[] = [];
  if (needsDatetime) importLines.push('from datetime import datetime');
  if (typingImports.length > 0) {
    importLines.push(`from typing import ${typingImports.join(', ')}`);
  }
  importLines.push(`from pydantic import ${pydanticImports.join(', ')}`);

  return importLines.join('\n') + '\n\n\n' + classes.join('\n\n\n');
}

function fieldTypeToPy(ft: FieldType | undefined, datetime: { needed: boolean }): string {
  switch (ft) {
    case 'integer':  return 'int';
    case 'float':    return 'float';
    case 'boolean':  return 'bool';
    case 'string':   return 'str';
    case 'datetime': datetime.needed = true; return 'datetime';
    default:         return 'Any';
  }
}

function fieldConfigToPy(
  cfg: FieldConfig,
  imports: Set<string>,
  datetime: { needed: boolean }
): string {
  const pyTypes = [...new Set(cfg.types.map(t => fieldTypeToPy(t, datetime)))];
  if (pyTypes.length === 1) return pyTypes[0];
  imports.add('Union');
  return `Union[${pyTypes.join(', ')}]`;
}

function memberToPy(m: string, imports: Set<string>, datetime: { needed: boolean }): string {
  switch (m) {
    case 'null':     return 'None';
    case 'string':   return 'str';
    case 'boolean':  return 'bool';
    case 'integer':  return 'int';
    case 'float':
    case 'number':   return 'float';
    case 'datetime': datetime.needed = true; return 'datetime';
    default:
      imports.add('Any');
      return 'Any';
  }
}

// Prevents a child object from sharing its type name with the root class.
function disambiguate(typeName: string, rootName: string): string {
  return typeName === rootName ? `${typeName}Item` : typeName;
}

function deriveItemName(rootName: string): string {
  const lower = rootName.toLowerCase();
  let singular = lower;
  if (lower.endsWith('ies'))
    singular = lower.slice(0, -3) + 'y';
  else if (
    lower.endsWith('ses') || lower.endsWith('xes') ||
    lower.endsWith('ches') || lower.endsWith('shes')
  )
    singular = lower.slice(0, -2);
  else if (lower.endsWith('s') && !lower.endsWith('ss') && lower.length > 2)
    singular = lower.slice(0, -1);
  const pascalSingular = singular.charAt(0).toUpperCase() + singular.slice(1);
  return pascalSingular !== rootName ? pascalSingular : `${rootName}Item`;
}

function pyField(key: string): string {
  const sanitized = key.replace(/-/g, '_').replace(/[^\w]/g, '_');
  return /^\d/.test(sanitized) ? `_${sanitized}` : sanitized || '_field';
}

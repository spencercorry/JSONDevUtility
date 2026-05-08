import { Injectable } from '@angular/core';
import { GenerationConfig, NullType, SchemaNode } from '../models/generation-config.model';

@Injectable({ providedIn: 'root' })
export class PydanticGeneratorService {
  generate(tree: SchemaNode, config: GenerationConfig): string {
    try {
      const classes: string[] = [];
      const seen = new Set<string>();
      const imports = new Set<string>();
      const rootName = config.rootTypeName;

      if (tree.kind === 'array') {
        const { itemType } = tree;
        if (itemType?.kind === 'object') {
          const itemName = deriveItemName(rootName);
          this.collectClasses({ ...itemType, typeName: itemName }, config, classes, seen, imports);
          imports.add('List');
          classes.push(`${rootName} = List[${itemName}]`);
        } else {
          const inner = itemType ? this.typeStr(itemType, config, '', imports) : 'Any';
          if (!itemType) imports.add('Any');
          imports.add('List');
          classes.push(`${rootName} = List[${inner}]`);
        }
      } else if (tree.kind === 'object') {
        this.collectClasses(tree, config, classes, seen, imports);
      } else {
        classes.push(`${rootName} = ${this.typeStr(tree, config, '', imports)}`);
      }

      return buildOutput(classes, imports, config);
    } catch (e: unknown) {
      return `# Generation error: ${e instanceof Error ? e.message : String(e)}`;
    }
  }

  private collectClasses(
    node: SchemaNode,
    config: GenerationConfig,
    out: string[],
    seen: Set<string>,
    imports: Set<string>
  ): void {
    if (node.kind === 'object') {
      if (seen.has(node.typeName)) return;
      seen.add(node.typeName);
      for (const child of node.children) {
        this.collectClasses(child, config, out, seen, imports);
      }
      out.push(this.buildClass(node, config, imports));
    } else if (node.kind === 'array' && node.itemType) {
      this.collectClasses(node.itemType, config, out, seen, imports);
    }
  }

  private buildClass(node: SchemaNode, config: GenerationConfig, imports: Set<string>): string {
    const fieldLines = node.children.map(child => {
      const typeStr = this.typeStr(child, config, child.key, imports);
      const defaultVal = child.kind === 'null' ? ' = None' : '';
      return `    ${pyField(child.key)}: ${typeStr}${defaultVal}`;
    });

    const bodyLines: string[] = [];
    if (config.pydanticVersion === 'v2') {
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
    imports: Set<string>
  ): string {
    switch (node.kind) {
      case 'primitive':
        return pyPrimitiveType(node.primitiveType);
      case 'null':
        return nullTypeStr(config, fieldPath, imports);
      case 'object':
        return node.typeName;
      case 'array': {
        imports.add('List');
        if (!node.itemType) {
          imports.add('Any');
          return 'List[Any]';
        }
        const inner = this.typeStr(node.itemType, config, fieldPath, imports);
        return `List[${inner}]`;
      }
      case 'union': {
        const members = (node.unionMembers ?? []).map(m => memberToPy(m, imports));
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

function buildOutput(classes: string[], imports: Set<string>, config: GenerationConfig): string {
  const typingImports = ['Optional', 'List', 'Union', 'Any'].filter(i => imports.has(i));
  const pydanticImports =
    config.pydanticVersion === 'v2' ? ['BaseModel', 'ConfigDict'] : ['BaseModel'];

  const importLines: string[] = [];
  if (typingImports.length > 0) {
    importLines.push(`from typing import ${typingImports.join(', ')}`);
  }
  importLines.push(`from pydantic import ${pydanticImports.join(', ')}`);

  return importLines.join('\n') + '\n\n\n' + classes.join('\n\n\n');
}

function nullTypeStr(config: GenerationConfig, fieldPath: string, imports: Set<string>): string {
  const t: NullType =
    config.nullMode === 'global'
      ? config.globalNullType
      : (config.perFieldNullMap[fieldPath] ?? config.globalNullType);
  imports.add('Optional');
  switch (t) {
    case 'string':      return 'Optional[str]';
    case 'number':      return 'Optional[float]';
    case 'boolean':     return 'Optional[bool]';
    case 'combination':
      imports.add('Union');
      return 'Optional[Union[str, float, bool]]';
  }
}

function pyPrimitiveType(pt: SchemaNode['primitiveType']): string {
  switch (pt) {
    case 'string':  return 'str';
    case 'boolean': return 'bool';
    case 'integer': return 'int';
    case 'float':   return 'float';
    case 'number':  return 'float';
    default:        return 'Any';
  }
}

function memberToPy(m: string, imports: Set<string>): string {
  switch (m) {
    case 'null':    return 'None';
    case 'string':  return 'str';
    case 'boolean': return 'bool';
    case 'integer': return 'int';
    case 'float':
    case 'number':  return 'float';
    default:
      imports.add('Any');
      return 'Any';
  }
}

function deriveItemName(rootName: string): string {
  // Reuse the same logic as the TS generator — singularize, fallback to rootName + 'Item'
  // Inline here to avoid cross-service dependency
  const lower = rootName.toLowerCase();
  let singular = lower;
  if (lower.endsWith('ies'))  singular = lower.slice(0, -3) + 'y';
  else if (lower.endsWith('ses') || lower.endsWith('xes') || lower.endsWith('ches') || lower.endsWith('shes'))
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

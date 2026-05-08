import { Injectable } from '@angular/core';
import { GenerationConfig } from '../models/generation-config.model';

@Injectable({ providedIn: 'root' })
export class JsObjectGeneratorService {
  generate(value: unknown, config: GenerationConfig): string {
    try {
      const varName = config.rootTypeName.charAt(0).toLowerCase() + config.rootTypeName.slice(1);
      return `const ${varName} = ${fmtValue(value, 0)};`;
    } catch (e: unknown) {
      return `// Generation error: ${e instanceof Error ? e.message : String(e)}`;
    }
  }
}

function fmtValue(value: unknown, depth: number): string {
  if (value === null) return 'null';
  if (typeof value === 'boolean' || typeof value === 'number') return String(value);
  if (typeof value === 'string') {
    return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
  }
  if (Array.isArray(value)) return fmtArray(value, depth);
  if (typeof value === 'object') return fmtObject(value as Record<string, unknown>, depth);
  return 'undefined';
}

function fmtObject(obj: Record<string, unknown>, depth: number): string {
  const keys = Object.keys(obj);
  if (keys.length === 0) return '{}';
  const pad = '  '.repeat(depth + 1);
  const close = '  '.repeat(depth);
  const entries = keys.map(k => `${pad}${fmtKey(k)}: ${fmtValue(obj[k], depth + 1)}`);
  return `{\n${entries.join(',\n')}\n${close}}`;
}

function fmtArray(arr: unknown[], depth: number): string {
  if (arr.length === 0) return '[]';
  const pad = '  '.repeat(depth + 1);
  const close = '  '.repeat(depth);
  const items = arr.map(item => `${pad}${fmtValue(item, depth + 1)}`);
  return `[\n${items.join(',\n')}\n${close}]`;
}

function fmtKey(key: string): string {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `'${key}'`;
}

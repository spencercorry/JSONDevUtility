import { SchemaKind, SchemaNode } from '../models/generation-config.model';
import { singularPascal, toPascalCase } from './singularize.util';

export function buildSchemaTree(value: unknown, key: string, typeName: string): SchemaNode {
  if (value === null) {
    return leaf(key, 'null', 'null');
  }
  if (typeof value === 'boolean') {
    return leaf(key, 'boolean', 'primitive', { primitiveType: 'boolean' });
  }
  if (typeof value === 'number') {
    return leaf(key, 'number', 'primitive', {
      primitiveType: Number.isInteger(value) ? 'integer' : 'float',
    });
  }
  if (typeof value === 'string') {
    return leaf(key, 'string', 'primitive', { primitiveType: 'string' });
  }
  if (Array.isArray(value)) {
    return buildArrayNode(value, key, typeName);
  }
  if (typeof value === 'object') {
    return buildObjectNode(value as Record<string, unknown>, key, typeName);
  }
  return leaf(key, 'unknown', 'unknown');
}

function buildObjectNode(obj: Record<string, unknown>, key: string, typeName: string): SchemaNode {
  const children = Object.entries(obj).map(([childKey, childVal]) =>
    buildSchemaTree(childVal, childKey, toPascalCase(childKey))
  );
  return { key, typeName, kind: 'object', children, itemType: null };
}

function buildArrayNode(arr: unknown[], key: string, typeName: string): SchemaNode {
  const itemTypeName = singularPascal(key) || typeName;

  if (arr.length === 0) {
    const itemType = leaf(key, 'unknown', 'unknown');
    return { key, typeName: `${itemTypeName}[]`, kind: 'array', children: [], itemType };
  }

  const shallowTypes = [...new Set(arr.map(shallowType))];

  if (shallowTypes.length === 1 && shallowTypes[0] === 'object') {
    const merged = mergeObjects(arr as Record<string, unknown>[]);
    const itemType = buildSchemaTree(merged, key, itemTypeName);
    return { key, typeName: `${itemType.typeName}[]`, kind: 'array', children: [], itemType };
  }

  if (shallowTypes.length === 1) {
    const representative = bestRepresentative(arr, shallowTypes[0]);
    const itemType = buildSchemaTree(representative, key, itemTypeName);
    return { key, typeName: `${itemType.typeName}[]`, kind: 'array', children: [], itemType };
  }

  const memberTypes = [...new Set(arr.map(typeLabel))];
  const unionTypeName = memberTypes.join(' | ');
  const itemType: SchemaNode = {
    key,
    typeName: unionTypeName,
    kind: 'union',
    children: [],
    itemType: null,
    unionMembers: memberTypes,
  };
  return { key, typeName: `(${unionTypeName})[]`, kind: 'array', children: [], itemType };
}

function leaf(
  key: string,
  typeName: string,
  kind: SchemaKind,
  extra?: { primitiveType?: SchemaNode['primitiveType']; unionMembers?: string[] }
): SchemaNode {
  return { key, typeName, kind, children: [], itemType: null, ...extra };
}

function shallowType(v: unknown): string {
  if (v === null) return 'null';
  if (Array.isArray(v)) return 'array';
  return typeof v;
}

function typeLabel(v: unknown): string {
  if (v === null) return 'null';
  if (Array.isArray(v)) return 'unknown[]';
  if (typeof v === 'object') return 'object';
  return typeof v;
}

function bestRepresentative(arr: unknown[], type: string): unknown {
  if (type === 'number') {
    return arr.find(v => !Number.isInteger(v)) ?? arr[0];
  }
  return arr[0];
}

function mergeObjects(objects: Record<string, unknown>[]): Record<string, unknown> {
  const merged: Record<string, unknown> = {};
  for (const obj of objects) {
    for (const [k, v] of Object.entries(obj)) {
      if (!(k in merged) || (merged[k] === null && v !== null)) {
        merged[k] = v;
      }
    }
  }
  return merged;
}

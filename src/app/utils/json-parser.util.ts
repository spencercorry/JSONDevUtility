import { FieldType, SchemaKind, SchemaNode } from '../models/generation-config.model';
import { singularPascal, toPascalCase } from './singularize.util';

// ─── Public API ────────────────────────────────────────────────────────────

export function buildSchemaTree(value: unknown, key: string, typeName: string): SchemaNode {
  if (value === null) return leaf(key, 'null', 'null');
  if (typeof value === 'boolean') return leaf(key, 'boolean', 'primitive', { primitiveType: 'boolean' });
  if (typeof value === 'number') {
    return leaf(key, 'number', 'primitive', {
      primitiveType: Number.isInteger(value) ? 'integer' : 'float',
    });
  }
  if (typeof value === 'string') return leaf(key, 'string', 'primitive', { primitiveType: 'string' });
  if (Array.isArray(value)) return buildArrayNode(value, key, typeName);
  if (typeof value === 'object') return buildObjectNode(value as Record<string, unknown>, key, typeName);
  return leaf(key, 'unknown', 'unknown');
}

// Returns full hierarchical dot-paths for every null-typed leaf, e.g. "user.profile.age".
export function extractNullFields(tree: SchemaNode): string[] {
  const paths: string[] = [];
  collectNulls(tree, paths, '');
  return paths;
}

export interface LeafFieldInfo {
  types: FieldType[];
  inferredOptional: boolean;
  inferredNullable: boolean;
}

// Returns every leaf field path mapped to its inferred type info.
// null-typed leaves have types:[] (user must configure); inferredNullable/inferredOptional are pre-fill hints.
export function extractAllLeafFields(tree: SchemaNode): Record<string, LeafFieldInfo> {
  const result: Record<string, LeafFieldInfo> = {};
  collectLeafFields(tree, result, '');
  return result;
}

// ─── Null field collection ─────────────────────────────────────────────────

function collectNulls(node: SchemaNode, out: string[], parentPath: string): void {
  const nodePath = parentPath && node.key ? `${parentPath}.${node.key}` : (node.key || parentPath);
  if (node.kind === 'null' && node.key) out.push(nodePath);
  for (const child of node.children) collectNulls(child, out, nodePath);
  if (node.kind === 'array' && node.itemType) collectArrayItemNulls(node.itemType, out, nodePath);
}

// Array itemType shares the array's path — don't re-add the key.
function collectArrayItemNulls(itemType: SchemaNode, out: string[], arrayPath: string): void {
  if (itemType.kind === 'null') { out.push(arrayPath); return; }
  for (const child of itemType.children) collectNulls(child, out, arrayPath);
  if (itemType.itemType) collectArrayItemNulls(itemType.itemType, out, arrayPath);
}

// ─── All-leaf-fields collection ────────────────────────────────────────────

function collectLeafFields(
  node: SchemaNode,
  out: Record<string, LeafFieldInfo>,
  parentPath: string
): void {
  const nodePath = parentPath && node.key ? `${parentPath}.${node.key}` : (node.key || parentPath);
  const inferredOptional = node.inferredOptional ?? false;
  const inferredNullable = node.inferredNullable ?? false;

  switch (node.kind) {
    case 'primitive':
      if (node.key) out[nodePath] = { types: node.primitiveType ? [node.primitiveType] : [], inferredOptional, inferredNullable };
      break;
    case 'null':
      if (node.key) out[nodePath] = { types: [], inferredOptional, inferredNullable };
      break;
    case 'union': {
      const hasNullMember = node.unionMembers?.includes('null') ?? false;
      if (node.key) out[nodePath] = { types: unionMembersToFieldTypes(node.unionMembers ?? []), inferredOptional, inferredNullable: inferredNullable || hasNullMember };
      break;
    }
    case 'unknown':
      if (node.key) out[nodePath] = { types: [], inferredOptional, inferredNullable };
      break;
    case 'object':
      for (const child of node.children) collectLeafFields(child, out, nodePath);
      break;
    case 'array':
      if (node.itemType) collectArrayItemLeafFields(node.itemType, out, nodePath);
      break;
  }
}

function collectArrayItemLeafFields(
  itemType: SchemaNode,
  out: Record<string, LeafFieldInfo>,
  arrayPath: string
): void {
  const inferredOptional = itemType.inferredOptional ?? false;
  const inferredNullable = itemType.inferredNullable ?? false;

  switch (itemType.kind) {
    case 'primitive':
      out[arrayPath] = { types: itemType.primitiveType ? [itemType.primitiveType] : [], inferredOptional, inferredNullable };
      break;
    case 'null':
      out[arrayPath] = { types: [], inferredOptional, inferredNullable };
      break;
    case 'union':
      out[arrayPath] = { types: unionMembersToFieldTypes(itemType.unionMembers ?? []), inferredOptional, inferredNullable };
      break;
    case 'unknown':
      out[arrayPath] = { types: [], inferredOptional, inferredNullable };
      break;
    case 'object':
      for (const child of itemType.children) collectLeafFields(child, out, arrayPath);
      break;
    case 'array':
      if (itemType.itemType) collectArrayItemLeafFields(itemType.itemType, out, arrayPath);
      break;
  }
}

function unionMembersToFieldTypes(members: string[]): FieldType[] {
  return members
    .filter(m => m !== 'null')
    .map(memberToFieldType)
    .filter((t): t is FieldType => t !== null);
}

function memberToFieldType(m: string): FieldType | null {
  switch (m) {
    case 'integer':  return 'integer';
    case 'float':
    case 'number':   return 'float';
    case 'string':   return 'string';
    case 'boolean':  return 'boolean';
    case 'datetime': return 'datetime';
    default:         return null;
  }
}

// ─── Schema node builders ──────────────────────────────────────────────────

function buildObjectNode(obj: Record<string, unknown>, key: string, typeName: string): SchemaNode {
  const children = Object.entries(obj).map(([childKey, childVal]) =>
    buildSchemaTree(childVal, childKey, toPascalCase(childKey))
  );
  return { key, typeName, kind: 'object', children, itemType: null };
}

function buildArrayNode(arr: unknown[], key: string, typeName: string): SchemaNode {
  const itemTypeName = singularPascal(key) || typeName;

  if (arr.length === 0) {
    return { key, typeName: `${itemTypeName}[]`, kind: 'array', children: [], itemType: leaf(key, 'unknown', 'unknown') };
  }

  const shallowTypes = [...new Set(arr.map(shallowType))];

  if (shallowTypes.length === 1 && shallowTypes[0] === 'object') {
    // All objects: merge schemas field-by-field to correctly infer unions (Bug #9 fix).
    const itemType = mergeObjectSchemas(arr as Record<string, unknown>[], key, itemTypeName);
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
    key, typeName: unionTypeName, kind: 'union',
    children: [], itemType: null, unionMembers: memberTypes,
  };
  return { key, typeName: `(${unionTypeName})[]`, kind: 'array', children: [], itemType };
}

// ─── Object schema merging (Bug #9) ───────────────────────────────────────

// Replaces the old raw-value mergeObjects(). Builds a SchemaNode per object and
// merges at the schema level so conflicting field types produce union nodes.
function mergeObjectSchemas(objects: Record<string, unknown>[], key: string, typeName: string): SchemaNode {
  const nodes = objects.map(obj => buildObjectNode(obj, key, typeName));
  return mergeSchemaObjectNodes(nodes, key, typeName);
}

function mergeSchemaObjectNodes(nodes: SchemaNode[], key: string, typeName: string): SchemaNode {
  const totalObjects = nodes.length;
  const fieldBuckets = new Map<string, SchemaNode[]>();
  for (const node of nodes) {
    for (const child of node.children) {
      if (!fieldBuckets.has(child.key)) fieldBuckets.set(child.key, []);
      fieldBuckets.get(child.key)!.push(child);
    }
  }
  const mergedChildren = [...fieldBuckets.entries()].map(([k, bucket]) => {
    const merged = mergeFieldNodes(bucket, k);
    if (bucket.length < totalObjects) merged.inferredOptional = true;
    return merged;
  });
  return { key, typeName, kind: 'object', children: mergedChildren, itemType: null };
}

function mergeFieldNodes(nodes: SchemaNode[], key: string): SchemaNode {
  if (nodes.length === 1) return nodes[0];

  const nullNodes = nodes.filter(n => n.kind === 'null');
  const nonNullNodes = nodes.filter(n => n.kind !== 'null');

  // All null → null leaf.
  if (nonNullNodes.length === 0) return leaf(key, 'null', 'null');

  // When some nodes are null and others are not, the result is inferredNullable.
  const hasNullSiblings = nullNodes.length > 0;

  // Partition non-null nodes by kind.
  const primitiveTypes = new Set<FieldType>();
  const objectNodes: SchemaNode[] = [];
  const arrayNodes: SchemaNode[] = [];
  let hasUnknown = false;

  for (const n of nonNullNodes) {
    if (n.kind === 'primitive' && n.primitiveType) {
      primitiveTypes.add(n.primitiveType);
    } else if (n.kind === 'object') {
      objectNodes.push(n);
    } else if (n.kind === 'array') {
      arrayNodes.push(n);
    } else if (n.kind === 'union') {
      for (const m of n.unionMembers ?? []) {
        const ft = memberToFieldType(m);
        if (ft) primitiveTypes.add(ft);
      }
    } else {
      hasUnknown = true;
    }
  }

  // All objects → merge recursively.
  if (objectNodes.length === nonNullNodes.length) {
    const result = mergeSchemaObjectNodes(objectNodes, key, objectNodes[0].typeName);
    if (hasNullSiblings) result.inferredNullable = true;
    return result;
  }

  // All arrays → merge item types recursively so field stays typed as T[].
  if (arrayNodes.length === nonNullNodes.length) {
    const itemTypes = arrayNodes
      .map(n => n.itemType)
      .filter((t): t is SchemaNode => t !== null);
    if (itemTypes.length === 0) {
      const result: SchemaNode = { key, typeName: 'unknown[]', kind: 'array', children: [], itemType: leaf(key, 'unknown', 'unknown') };
      if (hasNullSiblings) result.inferredNullable = true;
      return result;
    }
    const mergedItem = itemTypes.length === 1 ? itemTypes[0] : mergeFieldNodes(itemTypes, key);
    const result: SchemaNode = { key, typeName: `${mergedItem.typeName}[]`, kind: 'array', children: [], itemType: mergedItem };
    if (hasNullSiblings) result.inferredNullable = true;
    return result;
  }

  // Numeric promotion: integer + float → float.
  if (primitiveTypes.has('integer') && primitiveTypes.has('float')) primitiveTypes.delete('integer');

  const members: string[] = [...primitiveTypes];
  if (hasUnknown) members.push('unknown');

  // Resolved to a single primitive.
  if (members.length === 1 && primitiveTypes.size === 1) {
    const pt = [...primitiveTypes][0];
    const result = leaf(key, pt, 'primitive', { primitiveType: pt });
    if (hasNullSiblings) result.inferredNullable = true;
    return result;
  }

  // True union of multiple types.
  const result: SchemaNode = {
    key, typeName: members.join(' | '), kind: 'union',
    children: [], itemType: null, unionMembers: members,
  };
  if (hasNullSiblings) result.inferredNullable = true;
  return result;
}

// ─── Helpers ───────────────────────────────────────────────────────────────

function leaf(
  key: string,
  typeName: string,
  kind: SchemaKind,
  extra?: { primitiveType?: FieldType; unionMembers?: string[] }
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
  if (type === 'number') return arr.find(v => !Number.isInteger(v)) ?? arr[0];
  return arr[0];
}

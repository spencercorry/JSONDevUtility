import { buildSchemaTree, extractAllLeafFields, extractNullFields, LeafFieldInfo } from './json-parser.util';

describe('json-parser.util', () => {

  // ═══════════════════════════════════════════════════════════════════════════
  // buildSchemaTree — primitive type detection
  // ═══════════════════════════════════════════════════════════════════════════

  describe('buildSchemaTree — primitives', () => {
    it('detects null', () => {
      const n = buildSchemaTree(null, 'x', 'X');
      expect(n.kind).toBe('null');
    });

    it('detects boolean', () => {
      const n = buildSchemaTree(true, 'x', 'X');
      expect(n.kind).toBe('primitive');
      expect(n.primitiveType).toBe('boolean');
    });

    it('detects integer', () => {
      const n = buildSchemaTree(42, 'x', 'X');
      expect(n.kind).toBe('primitive');
      expect(n.primitiveType).toBe('integer');
    });

    it('detects float', () => {
      const n = buildSchemaTree(3.14, 'x', 'X');
      expect(n.kind).toBe('primitive');
      expect(n.primitiveType).toBe('float');
    });

    it('detects string', () => {
      const n = buildSchemaTree('hello', 'x', 'X');
      expect(n.kind).toBe('primitive');
      expect(n.primitiveType).toBe('string');
    });

    it('preserves key and typeName', () => {
      const n = buildSchemaTree('hello', 'myKey', 'MyType');
      expect(n.key).toBe('myKey');
      expect(n.typeName).toBe('string');
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // buildSchemaTree — objects
  // ═══════════════════════════════════════════════════════════════════════════

  describe('buildSchemaTree — objects', () => {
    it('creates an object node with correct children', () => {
      const n = buildSchemaTree({ name: 'Alice', age: 30 }, '', 'Root');
      expect(n.kind).toBe('object');
      expect(n.children.length).toBe(2);
      expect(n.children[0].key).toBe('name');
      expect(n.children[1].key).toBe('age');
    });

    it('creates an empty object node with no children', () => {
      const n = buildSchemaTree({}, '', 'Root');
      expect(n.kind).toBe('object');
      expect(n.children.length).toBe(0);
    });

    it('recursively builds nested objects', () => {
      const n = buildSchemaTree({ user: { name: 'Alice' } }, '', 'Root');
      const userChild = n.children[0];
      expect(userChild.kind).toBe('object');
      expect(userChild.children[0].key).toBe('name');
      expect(userChild.children[0].kind).toBe('primitive');
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // buildSchemaTree — arrays
  // ═══════════════════════════════════════════════════════════════════════════

  describe('buildSchemaTree — arrays', () => {
    it('produces an unknown itemType for an empty array', () => {
      const n = buildSchemaTree([], 'x', 'X');
      expect(n.kind).toBe('array');
      expect(n.itemType?.kind).toBe('unknown');
    });

    it('produces a string primitive itemType for a string array', () => {
      const n = buildSchemaTree(['a', 'b', 'c'], 'tags', 'Tags');
      expect(n.kind).toBe('array');
      expect(n.itemType?.kind).toBe('primitive');
      expect(n.itemType?.primitiveType).toBe('string');
    });

    it('produces an integer primitive itemType for an integer array', () => {
      const n = buildSchemaTree([1, 2, 3], 'ids', 'Ids');
      expect(n.itemType?.primitiveType).toBe('integer');
    });

    it('promotes integer+float mix to float (picks non-integer representative)', () => {
      const n = buildSchemaTree([1, 2.5, 3], 'vals', 'Vals');
      expect(n.itemType?.primitiveType).toBe('float');
    });

    it('produces a union itemType for a mixed-type array', () => {
      const n = buildSchemaTree([1, 'a'], 'vals', 'Vals');
      expect(n.itemType?.kind).toBe('union');
      expect(n.itemType?.unionMembers).toContain('number');
      expect(n.itemType?.unionMembers).toContain('string');
    });

    it('merges an array of same-shaped objects into a single object itemType', () => {
      const n = buildSchemaTree([{ x: 1 }, { x: 2 }], 'items', 'Items');
      expect(n.kind).toBe('array');
      expect(n.itemType?.kind).toBe('object');
      expect(n.itemType?.children.length).toBe(1);
      expect(n.itemType?.children[0].key).toBe('x');
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // buildSchemaTree — Bug #9: mergeObjectSchemas
  // ═══════════════════════════════════════════════════════════════════════════

  describe('buildSchemaTree — mergeObjectSchemas (Bug #9)', () => {
    it('produces a union node when the same field has conflicting types across objects', () => {
      const n = buildSchemaTree([{ id: 1 }, { id: 'abc' }], 'items', 'Items');
      const idField = n.itemType?.children.find(c => c.key === 'id');
      expect(idField?.kind).toBe('union');
      expect(idField?.unionMembers).toContain('integer');
      expect(idField?.unionMembers).toContain('string');
    });

    it('keeps a field as an array node when all objects have that field as an array (not unknown)', () => {
      const n = buildSchemaTree(
        [{ tags: ['a', 'b'] }, { tags: ['c'] }],
        'items', 'Items'
      );
      const tagsField = n.itemType?.children.find(c => c.key === 'tags');
      expect(tagsField?.kind).toBe('array');
      expect(tagsField?.itemType?.primitiveType).toBe('string');
    });

    it('merges integer fields across multiple objects into a single integer node', () => {
      const n = buildSchemaTree([{ x: 1 }, { x: 2 }, { x: 3 }], 'items', 'Items');
      const xField = n.itemType?.children.find(c => c.key === 'x');
      expect(xField?.kind).toBe('primitive');
      expect(xField?.primitiveType).toBe('integer');
    });

    it('promotes integer+float to float across merged objects', () => {
      const n = buildSchemaTree([{ v: 1 }, { v: 2.5 }], 'items', 'Items');
      const vField = n.itemType?.children.find(c => c.key === 'v');
      expect(vField?.kind).toBe('primitive');
      expect(vField?.primitiveType).toBe('float');
    });

    it('merges nested objects recursively across array items', () => {
      const n = buildSchemaTree(
        [{ user: { name: 'Alice' } }, { user: { name: 'Bob' } }],
        'items', 'Items'
      );
      const userField = n.itemType?.children.find(c => c.key === 'user');
      expect(userField?.kind).toBe('object');
      expect(userField?.children[0].key).toBe('name');
    });

    it('sets inferredOptional on a field that is absent in some objects', () => {
      const n = buildSchemaTree(
        [{ id: 1, name: 'Alice' }, { id: 2 }],
        'items', 'Items'
      );
      const idField = n.itemType?.children.find(c => c.key === 'id');
      const nameField = n.itemType?.children.find(c => c.key === 'name');
      expect(idField?.inferredOptional).toBeFalsy();
      expect(nameField?.inferredOptional).toBeTrue();
    });

    it('does not set inferredOptional on a field present in all objects', () => {
      const n = buildSchemaTree(
        [{ id: 1 }, { id: 2 }, { id: 3 }],
        'items', 'Items'
      );
      const idField = n.itemType?.children.find(c => c.key === 'id');
      expect(idField?.inferredOptional).toBeFalsy();
    });

    it('sets inferredOptional on a null field that is absent in some objects', () => {
      const n = buildSchemaTree(
        [{ type: 'login', details: null }, { type: 'logout' }],
        'items', 'Items'
      );
      const detailsField = n.itemType?.children.find(c => c.key === 'details');
      expect(detailsField?.kind).toBe('null');
      expect(detailsField?.inferredOptional).toBeTrue();
    });

    it('sets inferredNullable when a field is null in some objects and non-null in others', () => {
      const n = buildSchemaTree(
        [{ id: 1, code: null }, { id: 2, code: 'E001' }],
        'items', 'Items'
      );
      const codeField = n.itemType?.children.find(c => c.key === 'code');
      expect(codeField?.inferredNullable).toBeTrue();
      expect(codeField?.kind).toBe('primitive');
      expect(codeField?.primitiveType).toBe('string');
    });

    it('does not set inferredNullable when all instances have the same non-null type', () => {
      const n = buildSchemaTree(
        [{ code: 'A' }, { code: 'B' }],
        'items', 'Items'
      );
      const codeField = n.itemType?.children.find(c => c.key === 'code');
      expect(codeField?.inferredNullable).toBeFalsy();
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // extractNullFields
  // ═══════════════════════════════════════════════════════════════════════════

  describe('extractNullFields', () => {
    it('returns an empty array when there are no null fields', () => {
      const t = buildSchemaTree({ name: 'Alice', age: 30 }, '', 'Root');
      expect(extractNullFields(t)).toEqual([]);
    });

    it('returns the field name for a flat null field', () => {
      const t = buildSchemaTree({ value: null }, '', 'Root');
      expect(extractNullFields(t)).toEqual(['value']);
    });

    it('returns a dot-separated path for a nested null field', () => {
      const t = buildSchemaTree({ user: { name: null } }, '', 'Root');
      expect(extractNullFields(t)).toEqual(['user.name']);
    });

    it('returns all null field paths at multiple depths', () => {
      const t = buildSchemaTree(
        { a: null, b: { c: null, d: 'ok' } },
        '', 'Root'
      );
      const paths = extractNullFields(t);
      expect(paths).toContain('a');
      expect(paths).toContain('b.c');
      expect(paths).not.toContain('b.d');
    });

    it('returns null paths from inside an array of objects', () => {
      const t = buildSchemaTree({ users: [{ name: null }] }, '', 'Root');
      expect(extractNullFields(t)).toEqual(['users.name']);
    });

    it('does not include non-null sibling fields', () => {
      const t = buildSchemaTree({ name: 'Alice', missing: null }, '', 'Root');
      const paths = extractNullFields(t);
      expect(paths).toContain('missing');
      expect(paths).not.toContain('name');
    });
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // extractAllLeafFields
  // ═══════════════════════════════════════════════════════════════════════════

  describe('extractAllLeafFields', () => {
    it('maps flat primitive fields to their inferred FieldTypes', () => {
      const t = buildSchemaTree(
        { name: 'Alice', age: 30, score: 9.5, active: true },
        '', 'Root'
      );
      const fields = extractAllLeafFields(t);
      expect(fields['name'].types).toEqual(['string']);
      expect(fields['age'].types).toEqual(['integer']);
      expect(fields['score'].types).toEqual(['float']);
      expect(fields['active'].types).toEqual(['boolean']);
    });

    it('maps a null field to an empty types array', () => {
      const t = buildSchemaTree({ value: null }, '', 'Root');
      expect(extractAllLeafFields(t)['value'].types).toEqual([]);
    });

    it('uses dot-separated paths for nested object fields', () => {
      const t = buildSchemaTree({ user: { name: 'Alice' } }, '', 'Root');
      const fields = extractAllLeafFields(t);
      expect(fields['user.name'].types).toEqual(['string']);
      expect('user' in fields).toBeFalse();
    });

    it('maps an array field to its item type', () => {
      const t = buildSchemaTree({ tags: ['a', 'b'] }, '', 'Root');
      expect(extractAllLeafFields(t)['tags'].types).toEqual(['string']);
    });

    it('maps a union array field to multiple FieldTypes', () => {
      const t = buildSchemaTree(
        [{ id: 1 }, { id: 'abc' }],
        '', 'Root'
      );
      const fields = extractAllLeafFields(t);
      expect(fields['id'].types).toContain('integer');
      expect(fields['id'].types).toContain('string');
    });

    it('does not include intermediate object nodes as leaf entries', () => {
      const t = buildSchemaTree({ a: { b: { c: 1 } } }, '', 'Root');
      const fields = extractAllLeafFields(t);
      expect('a' in fields).toBeFalse();
      expect('a.b' in fields).toBeFalse();
      expect(fields['a.b.c'].types).toEqual(['integer']);
    });

    it('sets inferredNullable when a field is null in some objects and string in others', () => {
      const t = buildSchemaTree(
        [{ id: 1, code: null }, { id: 2, code: 'E001' }],
        '', 'Root'
      );
      const fields = extractAllLeafFields(t);
      expect(fields['code'].inferredNullable).toBeTrue();
      expect(fields['code'].types).toEqual(['string']);
    });

    it('does not set inferredNullable for null elements inside an array (null belongs in element type, not array nullability)', () => {
      const t = buildSchemaTree({ tags: [null, 'hello'] }, '', 'Root');
      const fields = extractAllLeafFields(t);
      expect(fields['tags'].inferredNullable).toBeFalse();
      expect(fields['tags'].types).toContain('string');
    });

    it('sets inferredOptional for a field absent in some objects', () => {
      const t = buildSchemaTree(
        [{ id: 1, name: 'Alice' }, { id: 2 }],
        '', 'Root'
      );
      const fields = extractAllLeafFields(t);
      expect(fields['name'].inferredOptional).toBeTrue();
      expect(fields['id'].inferredOptional).toBeFalsy();
    });

    it('returns inferredOptional and inferredNullable as false for normal fields', () => {
      const t = buildSchemaTree({ name: 'Alice' }, '', 'Root');
      const info: LeafFieldInfo = extractAllLeafFields(t)['name'];
      expect(info.inferredOptional).toBeFalse();
      expect(info.inferredNullable).toBeFalse();
    });
  });
});

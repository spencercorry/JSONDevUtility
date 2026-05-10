import { TestBed } from '@angular/core/testing';
import { FieldConfig, GenerationConfig, PydanticVersion, SchemaNode } from '../models/generation-config.model';
import { buildSchemaTree } from '../utils/json-parser.util';
import { PydanticGeneratorService } from './pydantic-generator.service';

// ─── Helpers ──────────────────────────────────────────────────────────────

function cfg(
  rootTypeName: string,
  fieldMap: Record<string, FieldConfig> = {},
  pydanticVersion: PydanticVersion = 'v1'
): GenerationConfig {
  return { rootTypeName, pydanticVersion, fieldMap };
}

function tree(value: unknown, rootTypeName: string): SchemaNode {
  return buildSchemaTree(value, '', rootTypeName);
}

// ─── Suite ────────────────────────────────────────────────────────────────

describe('PydanticGeneratorService', () => {
  let svc: PydanticGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    svc = TestBed.inject(PydanticGeneratorService);
  });

  // ── Primitive types ──────────────────────────────────────────────────────

  it('maps string, integer, float, and boolean primitives', () => {
    const out = svc.generate(
      tree({ name: 'Alice', age: 30, score: 9.5, active: true }, 'Root'),
      cfg('Root')
    );
    expect(out).toContain('name: str');
    expect(out).toContain('age: int');
    expect(out).toContain('score: float');
    expect(out).toContain('active: bool');
  });

  it('always emits from pydantic import BaseModel', () => {
    const out = svc.generate(tree({ x: 1 }, 'Root'), cfg('Root'));
    expect(out).toContain('from pydantic import BaseModel');
  });

  it('omits from typing import when no typing constructs are used', () => {
    const out = svc.generate(tree({ name: 'Alice' }, 'Root'), cfg('Root'));
    expect(out).not.toContain('from typing import');
  });

  // ── v1 vs v2 ─────────────────────────────────────────────────────────────

  it('does not add model_config for v1', () => {
    const out = svc.generate(tree({ x: 1 }, 'Root'), cfg('Root', {}, 'v1'));
    expect(out).not.toContain('model_config');
    expect(out).not.toContain('ConfigDict');
  });

  it('adds model_config = ConfigDict(strict=True) for v2', () => {
    const out = svc.generate(tree({ x: 1 }, 'Root'), cfg('Root', {}, 'v2'));
    expect(out).toContain('model_config = ConfigDict(strict=True)');
    expect(out).toContain('from pydantic import BaseModel, ConfigDict');
  });

  // ── Null fields ──────────────────────────────────────────────────────────

  it('renders a null field as Optional[Any] = None when not in fieldMap', () => {
    const out = svc.generate(tree({ value: null }, 'Root'), cfg('Root'));
    expect(out).toContain('value: Optional[Any] = None');
    expect(out).toContain('from typing import Optional, Any');
  });

  it('uses fieldMap type for a null field, still wraps in Optional', () => {
    const out = svc.generate(
      tree({ value: null }, 'Root'),
      cfg('Root', { value: { types: ['string'], optional: false } })
    );
    expect(out).toContain('value: Optional[str] = None');
    expect(out).not.toContain('Any');
  });

  // ── Optional flag ────────────────────────────────────────────────────────

  it('wraps a non-null field in Optional and adds = None when optional is true', () => {
    const out = svc.generate(
      tree({ email: 'a@b.com' }, 'Root'),
      cfg('Root', { email: { types: ['string'], optional: true } })
    );
    expect(out).toContain('email: Optional[str] = None');
  });

  it('does not add Optional or = None for a non-optional field', () => {
    const out = svc.generate(
      tree({ name: 'Alice' }, 'Root'),
      cfg('Root', { name: { types: ['string'], optional: false } })
    );
    expect(out).toContain('name: str');
    expect(out).not.toContain('Optional');
    expect(out).not.toContain('= None');
  });

  // ── Datetime ─────────────────────────────────────────────────────────────

  it('maps datetime FieldType to datetime and emits the datetime import', () => {
    const out = svc.generate(
      tree({ createdAt: null }, 'Root'),
      cfg('Root', { createdAt: { types: ['datetime'], optional: false } })
    );
    expect(out).toContain('from datetime import datetime');
    expect(out).toContain('createdAt: Optional[datetime] = None');
  });

  it('omits the datetime import when datetime type is not used', () => {
    const out = svc.generate(tree({ name: 'Alice' }, 'Root'), cfg('Root'));
    expect(out).not.toContain('from datetime import');
  });

  // ── Union types ──────────────────────────────────────────────────────────

  it('renders a union of multiple FieldTypes as Optional[Union[...]]', () => {
    const out = svc.generate(
      tree({ id: null }, 'Root'),
      cfg('Root', { id: { types: ['integer', 'string'], optional: false } })
    );
    expect(out).toContain('id: Optional[Union[int, str]] = None');
    expect(out).toContain('from typing import Optional, Union');
  });

  // ── Nested objects (children-first ordering) ─────────────────────────────

  it('emits child classes before parent classes (dependency-first)', () => {
    const out = svc.generate(tree({ user: { name: 'Alice' } }, 'Root'), cfg('Root'));
    expect(out).toContain('class User(BaseModel):');
    expect(out).toContain('class Root(BaseModel):');
    // Child must come before parent
    expect(out.indexOf('class User')).toBeLessThan(out.indexOf('class Root'));
  });

  it('uses the child class name as the field type in the parent', () => {
    const out = svc.generate(tree({ user: { name: 'Alice' } }, 'Root'), cfg('Root'));
    expect(out).toContain('user: User');
  });

  // ── Root array ───────────────────────────────────────────────────────────

  it('renders a root array of objects as Root = List[Item]', () => {
    const out = svc.generate(tree([{ name: 'Alice' }], 'Users'), cfg('Users'));
    expect(out).toContain('Users = List[User]');
    expect(out).toContain('class User(BaseModel):');
    expect(out).toContain('from typing import List');
  });

  it('renders a root array of primitives as Root = List[str]', () => {
    const out = svc.generate(tree(['a', 'b'], 'Tags'), cfg('Tags'));
    expect(out).toContain('Tags = List[str]');
  });

  // ── Root name collision (Bug #6) ─────────────────────────────────────────

  it('disambiguates a child class whose name collides with the root class', () => {
    const out = svc.generate(tree({ User: { name: 'Alice' } }, 'User'), cfg('User'));
    expect(out).toContain('class User(BaseModel):');
    expect(out).toContain('class UserItem(BaseModel):');
    expect(out).toContain('User: UserItem');
    // Must not declare User class twice
    const matches = out.match(/class User\(BaseModel\):/g) ?? [];
    expect(matches.length).toBe(1);
  });

  // ── String array field ───────────────────────────────────────────────────

  it('types a string array field as List[str]', () => {
    const out = svc.generate(
      tree({ tags: ['a', 'b', 'c'] }, 'Root'),
      cfg('Root')
    );
    expect(out).toContain('tags: List[str]');
    expect(out).toContain('from typing import List');
  });

  // ── Error handling ───────────────────────────────────────────────────────

  it('returns a generation error comment if an exception is thrown', () => {
    const brokenTree = null as unknown as SchemaNode;
    const out = svc.generate(brokenTree, cfg('Root'));
    expect(out).toContain('# Generation error:');
  });

  // ── Field name sanitization ───────────────────────────────────────────────

  it('converts hyphenated keys to underscores in field names', () => {
    const out = svc.generate(tree({ 'first-name': 'Alice' }, 'Root'), cfg('Root'));
    expect(out).toContain('first_name: str');
    expect(out).not.toContain('first-name');
  });

  it('prefixes digit-leading field names with an underscore', () => {
    const out = svc.generate(tree({ '2nd': 'place' }, 'Root'), cfg('Root'));
    expect(out).toContain('_2nd: str');
  });

  // ── Empty nested object → pass ────────────────────────────────────────────

  it('emits pass for a nested object that has no fields', () => {
    const out = svc.generate(tree({ meta: {} }, 'Root'), cfg('Root'));
    expect(out).toContain('class Meta(BaseModel):');
    expect(out).toContain('    pass');
  });

  // ── Array field with object items → List[ChildClass] ─────────────────────

  it('types an array-of-objects field as List[ChildClass] and emits the child class', () => {
    const out = svc.generate(
      tree({ users: [{ name: 'Alice', age: 30 }] }, 'Root'),
      cfg('Root')
    );
    expect(out).toContain('class User(BaseModel):');
    expect(out).toContain('users: List[User]');
    expect(out).toContain('from typing import List');
  });
});

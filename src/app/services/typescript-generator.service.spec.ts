import { TestBed } from '@angular/core/testing';
import { FieldConfig, GenerationConfig, PydanticVersion, SchemaNode } from '../models/generation-config.model';
import { buildSchemaTree } from '../utils/json-parser.util';
import { TypescriptGeneratorService } from './typescript-generator.service';

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

describe('TypescriptGeneratorService', () => {
  let svc: TypescriptGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    svc = TestBed.inject(TypescriptGeneratorService);
  });

  // ── Primitive types ──────────────────────────────────────────────────────

  it('maps string, integer, float, and boolean primitives', () => {
    const out = svc.generate(
      tree({ name: 'Alice', age: 30, score: 9.5, active: true }, 'Root'),
      cfg('Root')
    );
    expect(out).toContain('name: string;');
    expect(out).toContain('age: number;');
    expect(out).toContain('score: number;');
    expect(out).toContain('active: boolean;');
  });

  // ── Null fields ──────────────────────────────────────────────────────────

  it('renders a null field as unknown when not in fieldMap', () => {
    const out = svc.generate(tree({ value: null }, 'Root'), cfg('Root'));
    expect(out).toContain('value: unknown;');
  });

  it('uses fieldMap type for a null field', () => {
    const out = svc.generate(
      tree({ value: null }, 'Root'),
      cfg('Root', { value: { types: ['string'], nullable: false, optional: false } })
    );
    expect(out).toContain('value: string;');
    expect(out).not.toContain('unknown');
  });

  // ── Optional flag ────────────────────────────────────────────────────────

  it('adds ? to the key when optional is true', () => {
    const out = svc.generate(
      tree({ email: 'a@b.com' }, 'Root'),
      cfg('Root', { email: { types: ['string'], nullable: false, optional: true } })
    );
    expect(out).toContain('email?: string;');
  });

  it('does not add ? when optional is false', () => {
    const out = svc.generate(
      tree({ email: 'a@b.com' }, 'Root'),
      cfg('Root', { email: { types: ['string'], nullable: false, optional: false } })
    );
    expect(out).toContain('email: string;');
    expect(out).not.toContain('email?');
  });

  // ── Nullable flag ────────────────────────────────────────────────────────

  it('appends | null to the type when nullable is true and optional is false', () => {
    const out = svc.generate(
      tree({ code: 'A' }, 'Root'),
      cfg('Root', { code: { types: ['string'], nullable: true, optional: false } })
    );
    expect(out).toContain('code: string | null;');
    expect(out).not.toContain('code?');
  });

  it('appends | null and ? when both nullable and optional are true', () => {
    const out = svc.generate(
      tree({ code: 'A' }, 'Root'),
      cfg('Root', { code: { types: ['string'], nullable: true, optional: true } })
    );
    expect(out).toContain('code?: string | null;');
  });

  // ── Datetime ─────────────────────────────────────────────────────────────

  it('maps datetime FieldType to string in TypeScript', () => {
    const out = svc.generate(
      tree({ createdAt: null }, 'Root'),
      cfg('Root', { createdAt: { types: ['datetime'], nullable: false, optional: false } })
    );
    expect(out).toContain('createdAt: string;');
  });

  // ── Union types ──────────────────────────────────────────────────────────

  it('renders a union of multiple FieldTypes', () => {
    const out = svc.generate(
      tree({ id: null }, 'Root'),
      cfg('Root', { id: { types: ['integer', 'string'], nullable: false, optional: false } })
    );
    expect(out).toContain('id: number | string;');
  });

  // ── Nested objects ───────────────────────────────────────────────────────

  it('emits a separate interface for each nested object, root first', () => {
    const out = svc.generate(tree({ user: { name: 'Alice' } }, 'Root'), cfg('Root'));
    expect(out).toContain('export interface Root {');
    expect(out).toContain('export interface User {');
    // Root must come before User in the output
    expect(out.indexOf('interface Root')).toBeLessThan(out.indexOf('interface User'));
  });

  it('uses the child object as a type reference in the parent interface', () => {
    const out = svc.generate(tree({ user: { name: 'Alice' } }, 'Root'), cfg('Root'));
    expect(out).toContain('user: User;');
    expect(out).toContain('name: string;');
  });

  // ── Root array ───────────────────────────────────────────────────────────

  it('wraps a root array of objects as export type = Item[]', () => {
    const out = svc.generate(tree([{ name: 'Alice' }], 'Users'), cfg('Users'));
    expect(out).toContain('export type Users = User[];');
    expect(out).toContain('export interface User {');
  });

  it('wraps a root array of primitives as export type = string[]', () => {
    const out = svc.generate(tree(['a', 'b'], 'Tags'), cfg('Tags'));
    expect(out).toContain('export type Tags = string[];');
  });

  // ── Root name collision (Bug #6) ─────────────────────────────────────────

  it('disambiguates a child object whose typeName collides with rootTypeName', () => {
    const out = svc.generate(tree({ User: { name: 'Alice' } }, 'User'), cfg('User'));
    expect(out).toContain('export interface User {');
    expect(out).toContain('export interface UserItem {');
    expect(out).toContain('User: UserItem;');
    // Must not declare User twice
    const matches = out.match(/export interface User \{/g) ?? [];
    expect(matches.length).toBe(1);
  });

  // ── Special-character keys ───────────────────────────────────────────────

  it('quotes keys that are not valid JS identifiers', () => {
    const out = svc.generate(tree({ 'first-name': 'Alice' }, 'Root'), cfg('Root'));
    expect(out).toContain('"first-name": string;');
  });

  // ── String array field ───────────────────────────────────────────────────

  it('types a string array field as string[]', () => {
    const out = svc.generate(
      tree({ tags: ['a', 'b', 'c'] }, 'Root'),
      cfg('Root')
    );
    expect(out).toContain('tags: string[];');
  });

  // ── Error handling ───────────────────────────────────────────────────────

  it('returns a generation error comment if an exception is thrown', () => {
    // Pass a broken tree node to trigger the catch block
    const brokenTree = null as unknown as SchemaNode;
    const out = svc.generate(brokenTree, cfg('Root'));
    expect(out).toContain('// Generation error:');
  });

  // ── Deeply nested (3 levels) ─────────────────────────────────────────────

  it('emits a separate interface for each level of a 3-level nested object', () => {
    const out = svc.generate(
      tree({ org: { team: { member: 'Alice' } } }, 'Root'),
      cfg('Root')
    );
    expect(out).toContain('export interface Root {');
    expect(out).toContain('export interface Org {');
    expect(out).toContain('export interface Team {');
    expect(out).toContain('org: Org;');
    expect(out).toContain('team: Team;');
    expect(out).toContain('member: string;');
  });

  // ── Non-root array-of-objects field ──────────────────────────────────────

  it('types a non-root field containing an array of objects as ChildClass[]', () => {
    const out = svc.generate(
      tree({ users: [{ name: 'Alice', age: 30 }] }, 'Root'),
      cfg('Root')
    );
    expect(out).toContain('export interface User {');
    expect(out).toContain('users: User[];');
    expect(out).toContain('name: string;');
    expect(out).toContain('age: number;');
  });

  // ── Heterogeneous array union inference ───────────────────────────────────

  it('types an array field with mixed primitives as (number | string)[]', () => {
    const out = svc.generate(
      tree({ ids: [1, 'abc'] }, 'Root'),
      cfg('Root')
    );
    expect(out).toMatch(/ids: \(number \| string\)\[\]/);
  });

  it('puts null inside brackets for an array containing null elements', () => {
    const out = svc.generate(
      tree({ tags: [null, 'hello'] }, 'Root'),
      cfg('Root')
    );
    expect(out).toContain('tags: (null | string)[]');
    expect(out).not.toMatch(/\[\].*\| null/);
  });

  it('preserves null element type when fieldMap overrides the element type of a null-containing array', () => {
    const out = svc.generate(
      tree({ tags: [null, 'hello'] }, 'Root'),
      cfg('Root', { tags: { types: ['string'], nullable: false, optional: false } })
    );
    expect(out).toContain('tags: (string | null)[]');
    expect(out).not.toContain('(string)[]');
  });
});

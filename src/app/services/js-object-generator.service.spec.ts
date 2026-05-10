import { TestBed } from '@angular/core/testing';
import { GenerationConfig } from '../models/generation-config.model';
import { JsObjectGeneratorService } from './js-object-generator.service';

// ─── Helpers ──────────────────────────────────────────────────────────────

function cfg(rootTypeName: string): GenerationConfig {
  return { rootTypeName, pydanticVersion: 'v1', fieldMap: {} };
}

// ─── Suite ────────────────────────────────────────────────────────────────

describe('JsObjectGeneratorService', () => {
  let svc: JsObjectGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    svc = TestBed.inject(JsObjectGeneratorService);
  });

  // ── Variable naming ──────────────────────────────────────────────────────

  it('uses camelCase of rootTypeName as the const name', () => {
    const out = svc.generate({ x: 1 }, cfg('MyType'));
    expect(out).toContain('const myType =');
  });

  // ── Primitive values ─────────────────────────────────────────────────────

  it('renders string values with single quotes', () => {
    const out = svc.generate({ name: 'Alice' }, cfg('Root'));
    expect(out).toContain("name: 'Alice'");
  });

  it('renders number and boolean values as literals', () => {
    const out = svc.generate({ age: 30, active: true }, cfg('Root'));
    expect(out).toContain('age: 30');
    expect(out).toContain('active: true');
  });

  it('renders null as null', () => {
    const out = svc.generate({ data: null }, cfg('Root'));
    expect(out).toContain('data: null');
  });

  // ── Key formatting ───────────────────────────────────────────────────────

  it('leaves valid JS identifier keys unquoted', () => {
    const out = svc.generate({ firstName: 'Alice' }, cfg('Root'));
    expect(out).toContain('firstName:');
    expect(out).not.toContain("'firstName':");
  });

  it('wraps keys containing hyphens in single quotes', () => {
    const out = svc.generate({ 'first-name': 'Alice' }, cfg('Root'));
    expect(out).toContain("'first-name':");
  });

  // ── Object structure ─────────────────────────────────────────────────────

  it('indents nested objects with 2-space increments', () => {
    const out = svc.generate({ user: { name: 'Alice' } }, cfg('Root'));
    expect(out).toContain('  user: {');
    expect(out).toContain("    name: 'Alice'");
  });

  it('renders an empty object as {}', () => {
    const out = svc.generate({ meta: {} }, cfg('Root'));
    expect(out).toContain('meta: {}');
  });

  // ── Array handling ───────────────────────────────────────────────────────

  it('renders arrays with each item on its own indented line', () => {
    const out = svc.generate({ tags: ['a', 'b'] }, cfg('Root'));
    expect(out).toContain('tags: [');
    expect(out).toContain("    'a'");
    expect(out).toContain("    'b'");
  });

  it('renders an empty array as []', () => {
    const out = svc.generate({ items: [] }, cfg('Root'));
    expect(out).toContain('items: []');
  });

  // ── Root array ───────────────────────────────────────────────────────────

  it('renders a root array correctly', () => {
    const out = svc.generate([{ name: 'Alice' }], cfg('Users'));
    expect(out).toContain('const users = [');
    expect(out).toContain("    name: 'Alice'");
  });

  // ── String escaping ──────────────────────────────────────────────────────

  it("escapes single quotes inside string values", () => {
    const out = svc.generate({ msg: "it's fine" }, cfg('Root'));
    expect(out).toContain("msg: 'it\\'s fine'");
  });

  // ── Error handling ───────────────────────────────────────────────────────

  it('returns a generation error comment if an exception is thrown', () => {
    // Trigger error by passing a value that breaks the formatter
    const circular: Record<string, unknown> = {};
    circular['self'] = circular;
    // fmtValue recurses infinitely on circular refs — Angular catches it
    // via the try/catch in generate(). We simulate by spying on fmtValue indirectly.
    // Instead, pass undefined rootTypeName to trigger charAt error.
    const brokenCfg = { rootTypeName: null as unknown as string, pydanticVersion: 'v1' as const, fieldMap: {} };
    const out = svc.generate({}, brokenCfg);
    expect(out).toContain('// Generation error:');
  });

  // ── Backslash escaping ───────────────────────────────────────────────────

  it('escapes backslashes inside string values', () => {
    const out = svc.generate({ path: 'C:\\Users\\test' }, cfg('Root'));
    expect(out).toContain("path: 'C:\\\\Users\\\\test'");
  });

  // ── Falsy values ─────────────────────────────────────────────────────────

  it('renders false as a literal', () => {
    const out = svc.generate({ active: false }, cfg('Root'));
    expect(out).toContain('active: false');
  });

  it('renders 0 as a literal', () => {
    const out = svc.generate({ count: 0 }, cfg('Root'));
    expect(out).toContain('count: 0');
  });
});

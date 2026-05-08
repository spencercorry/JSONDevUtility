export type NullType = 'string' | 'number' | 'boolean' | 'combination';
export type PydanticVersion = 'v1' | 'v2';
export type NullMode = 'global' | 'per-field';
export type OutputTab = 'typescript' | 'pydantic' | 'jsObject';
export type SchemaKind = 'primitive' | 'object' | 'array' | 'null' | 'union' | 'unknown';

export interface GenerationConfig {
  rootTypeName: string;
  pydanticVersion: PydanticVersion;
  nullMode: NullMode;
  globalNullType: NullType;
  perFieldNullMap: Record<string, NullType>;
}

export interface SchemaNode {
  key: string;
  typeName: string;
  kind: SchemaKind;
  children: SchemaNode[];
  itemType: SchemaNode | null;
  primitiveType?: 'string' | 'number' | 'integer' | 'float' | 'boolean';
  unionMembers?: string[];
}

export interface OutputCache {
  typescript: string | null;
  pydantic: string | null;
  jsObject: string | null;
}

export interface ParseResult {
  ok: boolean;
  value?: unknown;
  error?: string;
}

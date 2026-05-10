export type FieldType = 'integer' | 'string' | 'float' | 'boolean' | 'datetime';
export type OutputTab = 'typescript' | 'pydantic' | 'jsObject';
export type SchemaKind = 'primitive' | 'object' | 'array' | 'null' | 'union' | 'unknown';

export interface FieldConfig {
  types:    FieldType[];
  nullable: boolean;
  optional: boolean;
}

export interface GenerationConfig {
  rootTypeName: string;
  strictMode: boolean;
  fieldMap: Record<string, FieldConfig>;
}

export interface SchemaNode {
  key: string;
  typeName: string;
  kind: SchemaKind;
  children: SchemaNode[];
  itemType: SchemaNode | null;
  primitiveType?: FieldType;
  unionMembers?: string[];
  inferredOptional?: boolean;
  inferredNullable?: boolean;
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

const IRREGULARS: Record<string, string> = {
  children: 'child',
  people: 'person',
  men: 'man',
  women: 'woman',
  feet: 'foot',
  teeth: 'tooth',
  mice: 'mouse',
  geese: 'goose',
  data: 'datum',
  criteria: 'criterion',
  media: 'medium',
};

const INVARIANTS = new Set([
  'status', 'series', 'species', 'news', 'information',
  'equipment', 'metadata', 'means', 'crossroads',
]);

export function singularize(word: string): string {
  const lower = word.toLowerCase();
  if (INVARIANTS.has(lower)) return lower;
  if (IRREGULARS[lower]) return IRREGULARS[lower];
  if (lower.endsWith('ies') && lower.length > 3) return lower.slice(0, -3) + 'y';
  if (lower.endsWith('sses') || lower.endsWith('xes') || lower.endsWith('ches') || lower.endsWith('shes')) {
    return lower.slice(0, -2);
  }
  if (lower.endsWith('ses') && lower.length > 4) return lower.slice(0, -2);
  if (lower.endsWith('ves') && lower.length > 4) return lower.slice(0, -3) + 'f';
  if (lower.endsWith('s') && !lower.endsWith('ss') && lower.length > 2) return lower.slice(0, -1);
  return lower;
}

export function toPascalCase(str: string): string {
  if (!str) return str;
  return str
    .replace(/([A-Z])/g, ' $1')
    .split(/[\s\-_]+/)
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

export function singularPascal(key: string): string {
  const words = key
    .replace(/([A-Z])/g, ' $1')
    .split(/[\s\-_]+/)
    .filter(Boolean);
  if (words.length === 0) return toPascalCase(key);
  words[words.length - 1] = singularize(words[words.length - 1]);
  return words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}

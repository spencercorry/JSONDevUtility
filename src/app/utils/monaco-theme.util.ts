export function registerUtilityDarkTheme(monaco: any): void {
  monaco.editor.defineTheme('utilityDark', {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'keyword',          foreground: '7c6af7' },
      { token: 'string',           foreground: '80cfa9' },
      { token: 'string.value.json',foreground: '80cfa9' },
      { token: 'string.key.json',  foreground: '63b3ed' },
      { token: 'number',           foreground: 'e8a97e' },
      { token: 'comment',          foreground: '4a5568', fontStyle: 'italic' },
      { token: 'type',             foreground: '63b3ed' },
      { token: 'variable',         foreground: 'e2e8f0' },
    ],
    colors: {
      'editor.background':               '#0f1117',
      'editor.foreground':               '#e2e8f0',
      'editor.lineHighlightBackground':  '#1a1f2e',
      'editor.selectionBackground':      '#2d3548',
      'editorGutter.background':         '#0f1117',
      'editorCursor.foreground':         '#7c6af7',
      'editorLineNumber.foreground':     '#4a5568',
      'editorLineNumber.activeForeground':'#718096',
      'editorIndentGuide.background1':   '#2d3548',
      'editorBracketMatch.background':   '#2d354880',
      'editorBracketMatch.border':       '#7c6af7',
      'scrollbar.shadow':                '#00000000',
      'scrollbarSlider.background':      '#2d354880',
      'scrollbarSlider.hoverBackground': '#2d3548',
    },
  });
}

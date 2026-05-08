import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { registerUtilityDarkTheme } from '../../utils/monaco-theme.util';

@Component({
  selector: 'app-output-tab',
  imports: [MonacoEditorModule, MatButtonModule, MatIconModule],
  templateUrl: './output-tab.html',
  styleUrl: './output-tab.scss',
})
export class OutputTab {
  readonly content = input<string | null>(null);
  readonly language = input<string>('plaintext');

  private readonly snackBar = inject(MatSnackBar);
  private editorRef: any = null;
  protected readonly copied = signal(false);
  private copyTimer: ReturnType<typeof setTimeout> | null = null;

  protected readonly editorOptions = computed(() => ({
    readOnly: true,
    language: this.language(),
    automaticLayout: true,
    scrollBeyondLastLine: false,
    minimap: { enabled: false },
    fontSize: 13,
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    lineNumbers: 'on',
    renderLineHighlight: 'none',
    padding: { top: 12 },
  }));

  constructor() {
    effect(() => {
      const value = this.content() ?? '';
      if (this.editorRef && this.editorRef.getValue() !== value) {
        this.editorRef.setValue(value);
      }
    });
  }

  protected onEditorInit(editor: any): void {
    const monaco = (window as any)['monaco'];
    registerUtilityDarkTheme(monaco);
    monaco.editor.setTheme('utilityDark');
    this.editorRef = editor;
    const value = this.content() ?? '';
    if (value) editor.setValue(value);
  }

  protected async copy(): Promise<void> {
    const text = this.content();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      this.copied.set(true);
      if (this.copyTimer) clearTimeout(this.copyTimer);
      this.copyTimer = setTimeout(() => this.copied.set(false), 2000);
    } catch {
      this.snackBar.open('Copy failed. Please select and copy manually.', '✕', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
  }
}

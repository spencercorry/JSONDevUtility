import { Component, effect, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { GenerationConfig } from '../../models/generation-config.model';
import { JsonStateService } from '../../services/json-state.service';
import { extractNullFields } from '../../utils/json-parser.util';
import { registerUtilityDarkTheme } from '../../utils/monaco-theme.util';
import { SubmitModalComponent, SubmitModalData } from '../submit-modal/submit-modal';

@Component({
  selector: 'app-left-pane',
  imports: [MatButtonModule, MonacoEditorModule],
  templateUrl: './left-pane.component.html',
  styleUrl: './left-pane.component.scss',
})
export class LeftPaneComponent {
  private readonly snackBar = inject(MatSnackBar);
  private readonly dialog = inject(MatDialog);
  protected readonly jsonState = inject(JsonStateService);
  private editorRef: any = null;

  protected readonly editorOptions = {
    language: 'json',
    automaticLayout: true,
    formatOnPaste: true,
    scrollBeyondLastLine: false,
    minimap: { enabled: false },
    fontSize: 13,
    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
    lineNumbers: 'on',
    renderLineHighlight: 'line',
    padding: { top: 12 },
  };

  constructor() {
    // Sync external signal changes (e.g. Beautify) back to the editor.
    // Skipped when the user is typing — signal and editor already agree.
    effect(() => {
      const value = this.jsonState.rawJson();
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

    const initial = this.jsonState.rawJson();
    if (initial) editor.setValue(initial);

    editor.onDidChangeModelContent(() => {
      this.jsonState.rawJson.set(editor.getValue());
    });
  }

  protected beautify(): void {
    try {
      const formatted = JSON.stringify(JSON.parse(this.jsonState.rawJson()), null, 2);
      this.jsonState.rawJson.set(formatted);
    } catch {
      this.snackBar.open('Cannot beautify — fix JSON errors first.', '✕', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
  }

  protected submit(): void {
    const tree = this.jsonState.schemaTreePreview();
    if (!tree) return;

    const ref = this.dialog.open<SubmitModalComponent, SubmitModalData, GenerationConfig | undefined>(
      SubmitModalComponent,
      { panelClass: 'utility-modal', data: { nullFields: extractNullFields(tree) } }
    );

    ref.afterClosed().subscribe(config => {
      if (config) this.jsonState.applyConfig(config);
    });
  }
}

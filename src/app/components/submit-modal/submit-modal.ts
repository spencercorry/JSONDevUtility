import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  GenerationConfig,
  NullMode,
  NullType,
  PydanticVersion,
} from '../../models/generation-config.model';

export interface SubmitModalData {
  nullFields: string[];
}

@Component({
  selector: 'app-submit-modal',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatButtonModule,
  ],
  templateUrl: './submit-modal.html',
  styleUrl: './submit-modal.scss',
})
export class SubmitModalComponent {
  private readonly fb = inject(FormBuilder);
  protected readonly data = inject<SubmitModalData>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef<SubmitModalComponent>);

  protected readonly form = this.fb.group({
    rootTypeName: ['', nonEmpty],
    pydanticVersion: ['v1' as PydanticVersion],
    nullMode: ['global' as NullMode],
    globalNullType: ['string' as NullType],
    perFieldNullMap: this.fb.group(
      Object.fromEntries(this.data.nullFields.map(f => [f, 'string' as NullType]))
    ),
  });

  protected get isGlobal(): boolean {
    return this.form.controls.nullMode.value === 'global';
  }

  protected confirm(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const config: GenerationConfig = {
      rootTypeName: v.rootTypeName!.trim(),
      pydanticVersion: v.pydanticVersion as PydanticVersion,
      nullMode: v.nullMode as NullMode,
      globalNullType: v.globalNullType as NullType,
      perFieldNullMap: (v.perFieldNullMap ?? {}) as Record<string, NullType>,
    };
    this.dialogRef.close(config);
  }

  protected dismiss(): void {
    this.dialogRef.close(undefined);
  }
}

function nonEmpty(ctrl: AbstractControl): ValidationErrors | null {
  return (ctrl.value as string)?.trim() ? null : { required: true };
}

import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FieldConfig, FieldType, GenerationConfig, PydanticVersion } from '../../models/generation-config.model';
import { LeafFieldInfo } from '../../utils/json-parser.util';

export interface SubmitModalData {
  nullFields: string[];
  allLeafFields?: Record<string, LeafFieldInfo>;
  previousFieldMap?: Record<string, FieldConfig>;
  previousRootTypeName?: string;
}

@Component({
  selector: 'app-submit-modal',
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
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
    rootTypeName: [this.data.previousRootTypeName ?? 'Root', nonEmpty],
    pydanticVersion: ['v1' as PydanticVersion],
  });

  protected advancedOpen = false;

  protected readonly FIELD_TYPES: FieldType[] = ['integer', 'string', 'float', 'boolean', 'datetime'];
  protected readonly TYPE_LABELS: Record<FieldType, string> = {
    integer: 'int',
    string: 'str',
    float: 'flt',
    boolean: 'bool',
    datetime: 'dt',
  };

  protected readonly nullFields: string[];
  protected readonly advancedFields: string[];

  // Mutable state — default CD re-evaluates methods on every event.
  private readonly fieldTypesMap: Record<string, FieldType[]> = {};
  private readonly fieldNullableMap: Record<string, boolean> = {};
  private readonly fieldOptionalMap: Record<string, boolean> = {};

  constructor() {
    const allLeafFields = this.data.allLeafFields ?? {};
    const prevMap = this.data.previousFieldMap ?? {};
    const nullSet = new Set(this.data.nullFields ?? []);
    this.nullFields = [...nullSet];

    for (const path of this.nullFields) {
      this.fieldTypesMap[path] = prevMap[path]?.types ?? [];
      this.fieldNullableMap[path] = prevMap[path]?.nullable ?? true;
      this.fieldOptionalMap[path] = prevMap[path]?.optional ?? (allLeafFields[path]?.inferredOptional ?? false);
    }

    this.advancedFields = Object.keys(allLeafFields).filter(p => !nullSet.has(p));
    for (const path of this.advancedFields) {
      const info = allLeafFields[path];
      this.fieldTypesMap[path] = prevMap[path]?.types ?? [...(info?.types ?? [])];
      this.fieldNullableMap[path] = prevMap[path]?.nullable ?? (info?.inferredNullable ?? false);
      this.fieldOptionalMap[path] = prevMap[path]?.optional ?? (info?.inferredOptional ?? false);
    }
  }

  protected toggleType(path: string, type: FieldType): void {
    const current = this.fieldTypesMap[path] ?? [];
    const idx = current.indexOf(type);
    this.fieldTypesMap[path] = idx >= 0 ? current.filter(t => t !== type) : [...current, type];
  }

  protected isTypeSelected(path: string, type: FieldType): boolean {
    return (this.fieldTypesMap[path] ?? []).includes(type);
  }

  protected toggleNullable(path: string): void {
    this.fieldNullableMap[path] = !(this.fieldNullableMap[path] ?? false);
  }

  protected isNullable(path: string): boolean {
    return this.fieldNullableMap[path] ?? false;
  }

  protected toggleOptional(path: string): void {
    this.fieldOptionalMap[path] = !(this.fieldOptionalMap[path] ?? false);
  }

  protected isOptional(path: string): boolean {
    return this.fieldOptionalMap[path] ?? false;
  }

  protected isResolved(path: string): boolean {
    return (this.fieldTypesMap[path] ?? []).length > 0;
  }

  protected get allNullFieldsResolved(): boolean {
    return this.nullFields.every(p => this.isResolved(p));
  }

  protected get canGenerate(): boolean {
    return this.form.valid && this.allNullFieldsResolved;
  }

  protected confirm(): void {
    if (!this.canGenerate) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const fieldMap: Record<string, FieldConfig> = {};
    for (const path of [...this.nullFields, ...this.advancedFields]) {
      const types = this.fieldTypesMap[path] ?? [];
      const nullable = this.fieldNullableMap[path] ?? false;
      const optional = this.fieldOptionalMap[path] ?? false;
      if (types.length > 0 || nullable || optional) {
        fieldMap[path] = { types, nullable, optional };
      }
    }
    const config: GenerationConfig = {
      rootTypeName: v.rootTypeName!.trim(),
      pydanticVersion: v.pydanticVersion as PydanticVersion,
      fieldMap,
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

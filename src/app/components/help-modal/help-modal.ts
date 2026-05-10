import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-help-modal',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './help-modal.html',
  styleUrl: './help-modal.scss',
})
export class HelpModal {
  private readonly dialogRef = inject(MatDialogRef<HelpModal>);

  protected close(): void {
    this.dialogRef.close();
  }
}

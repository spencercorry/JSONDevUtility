import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { HelpModal } from '../help-modal/help-modal';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly dialog = inject(MatDialog);

  protected openHelp(): void {
    this.dialog.open(HelpModal, {
      panelClass: 'utility-modal',
      width: '600px',
      maxWidth: '95vw',
    });
  }
}

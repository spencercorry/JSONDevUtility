import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { OutputTab as OutputTabKey } from '../../models/generation-config.model';
import { JsonStateService } from '../../services/json-state.service';
import { OutputTab } from '../output-tab/output-tab';

const TAB_ORDER: OutputTabKey[] = ['typescript', 'pydantic', 'jsObject'];

@Component({
  selector: 'app-right-pane',
  imports: [MatTabsModule, MatIconModule, OutputTab],
  templateUrl: './right-pane.html',
  styleUrl: './right-pane.scss',
})
export class RightPane {
  protected readonly jsonState = inject(JsonStateService);

  protected onTabChange(index: number): void {
    this.jsonState.activeTab.set(TAB_ORDER[index]);
  }

  protected tabContent(tab: OutputTabKey): string | null {
    return this.jsonState.outputCache()[tab];
  }
}

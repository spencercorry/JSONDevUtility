import { Component } from '@angular/core';
import { LeftPaneComponent } from './components/left-pane/left-pane.component';

@Component({
  selector: 'app-root',
  imports: [LeftPaneComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}

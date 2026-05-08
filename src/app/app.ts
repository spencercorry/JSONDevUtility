import { Component } from '@angular/core';
import { LeftPaneComponent } from './components/left-pane/left-pane.component';
import { RightPane } from './components/right-pane/right-pane';

@Component({
  selector: 'app-root',
  imports: [LeftPaneComponent, RightPane],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}

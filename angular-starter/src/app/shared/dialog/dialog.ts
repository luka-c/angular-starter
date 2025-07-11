import { Component, input } from '@angular/core';
import {
  NgpDialog,
  NgpDialogDescription,
  NgpDialogOverlay,
  NgpDialogTitle,
  provideDialogState,
} from 'ng-primitives/dialog';

@Component({
  selector: 'app-dialog',
  hostDirectives: [NgpDialogOverlay],
  imports: [NgpDialog, NgpDialogTitle, NgpDialogDescription],
  providers: [provideDialogState()],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
})
export class Dialog {
  readonly header = input.required<string>();
}

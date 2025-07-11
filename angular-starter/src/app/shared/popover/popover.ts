import { Component } from '@angular/core';
import { injectPopoverContext, NgpPopover } from 'ng-primitives/popover';

@Component({
  selector: 'app-popover',
  hostDirectives: [NgpPopover],
  imports: [],
  templateUrl: './popover.html',
  styleUrl: './popover.scss',
})
export class Popover {
  readonly content = injectPopoverContext();
}

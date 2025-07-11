import { Component, input } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';

export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'destructive'
  | 'outline'
  | 'ghost'
  | 'link';

@Component({
  selector: 'button[app-button]',
  hostDirectives: [{ directive: NgpButton, inputs: ['disabled'] }],
  host: {
    '[attr.data-size]': 'size()',
    '[attr.data-variant]': 'variant()',
  },
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  readonly size = input<ButtonSize>('md');
  readonly variant = input<ButtonVariant>('primary');
}

/** Usage example:
 <button app-button size="sm">Click me</button>
 */

/** See more on: https://angularprimitives.com/primitives/button */

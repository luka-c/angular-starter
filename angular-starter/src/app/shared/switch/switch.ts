import { Component } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import {
  injectSwitchState,
  NgpSwitch,
  NgpSwitchThumb,
} from 'ng-primitives/switch';
import { ChangeFn, provideValueAccessor, TouchedFn } from 'ng-primitives/utils';

@Component({
  selector: 'app-switch',
  hostDirectives: [
    {
      directive: NgpSwitch,
      inputs: ['ngpSwitchChecked:checked', 'ngpSwitchDisabled:disabled'],
      outputs: ['ngpSwitchCheckedChange:checkedChange'],
    },
  ],
  imports: [NgpSwitchThumb],
  providers: [provideValueAccessor(Switch)],
  host: {
    '(focusout)': 'onTouched?.()',
  },
  templateUrl: './switch.html',
  styleUrl: './switch.scss',
})
export class Switch implements ControlValueAccessor {
  /** Access the switch state */
  private readonly switch = injectSwitchState();

  /** The on change callback */
  private onChange?: ChangeFn<boolean>;

  /** The on touched callback */
  protected onTouched?: TouchedFn;

  constructor() {
    // Any time the switch changes, update the form value.
    this.switch().checkedChange.subscribe((value) => this.onChange?.(value));
  }

  /** Write a new value to the switch. */
  writeValue(value: boolean): void {
    this.switch().checked.set(value);
  }

  /** Register a callback function to be called when the value changes. */
  registerOnChange(fn: ChangeFn<boolean>): void {
    this.onChange = fn;
  }

  /** Register a callback function to be called when the switch is touched. */
  registerOnTouched(fn: TouchedFn): void {
    this.onTouched = fn;
  }

  /** Set the disabled state of the switch. */
  setDisabledState(isDisabled: boolean): void {
    this.switch().disabled.set(isDisabled);
  }
}

/** Usage example:
 @param checked is a signal<boolean>()
 <app-switch [(ngModel)]="checked" aria-label="Toggle Switch" />
 */

import { Component } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideMinus } from '@ng-icons/lucide';
import { injectCheckboxState, NgpCheckbox } from 'ng-primitives/checkbox';
import { ChangeFn, provideValueAccessor, TouchedFn } from 'ng-primitives/utils';

@Component({
  selector: 'app-checkbox',
  hostDirectives: [
    {
      directive: NgpCheckbox,
      inputs: [
        'ngpCheckboxChecked:checked',
        'ngpCheckboxIndeterminate:indeterminate',
        'ngpCheckboxDisabled:disabled',
      ],
      outputs: [
        'ngpCheckboxCheckedChange:checkedChange',
        'ngpCheckboxIndeterminateChange:indeterminateChange',
      ],
    },
  ],
  providers: [
    provideValueAccessor(Checkbox),
    provideIcons({ lucideCheck, lucideMinus }),
  ],
  imports: [NgIcon],
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss',
  host: {
    '(focusout)': 'onTouchedFn?.()',
  },
})
export class Checkbox implements ControlValueAccessor {
  /**
   * The checked state of the checkbox.
   */
  protected readonly state = injectCheckboxState();

  /**
   * The onChange function for the checkbox.
   */
  protected onChangeFn?: ChangeFn<boolean>;

  /**
   * The onTouched function for the checkbox.
   */
  protected onTouchedFn?: TouchedFn;

  constructor() {
    // Whenever the user interacts with the checkbox, call the onChange function with the new value.
    this.state().checkedChange.subscribe((checked) => {
      this.onChangeFn?.(checked);
    });
  }

  writeValue(checked: boolean): void {
    this.state().checked.set(checked);
  }

  registerOnChange(fn: ChangeFn<boolean>): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: TouchedFn): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.state().disabled.set(isDisabled);
  }
}

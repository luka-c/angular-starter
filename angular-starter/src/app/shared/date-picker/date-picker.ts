import { Component, computed } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronLeft, lucideChevronRight } from '@ng-icons/lucide';
import {
  injectDatePickerState,
  NgpDatePicker,
  NgpDatePickerCell,
  NgpDatePickerCellRender,
  NgpDatePickerDateButton,
  NgpDatePickerGrid,
  NgpDatePickerLabel,
  NgpDatePickerNextMonth,
  NgpDatePickerPreviousMonth,
  NgpDatePickerRowRender,
} from 'ng-primitives/date-picker';
import { ChangeFn, provideValueAccessor, TouchedFn } from 'ng-primitives/utils';

@Component({
  selector: 'app-calendar',
  hostDirectives: [
    {
      directive: NgpDatePicker,
      inputs: [
        'ngpDatePickerDate: date',
        'ngpDatePickerMin: min',
        'ngpDatePickerMax: max',
        'ngpDatePickerDisabled: disabled',
      ],
      outputs: ['ngpDatePickerDateChange: dateChange'],
    },
  ],
  imports: [
    NgIcon,
    NgpDatePickerLabel,
    NgpDatePickerNextMonth,
    NgpDatePickerPreviousMonth,
    NgpDatePickerGrid,
    NgpDatePickerCell,
    NgpDatePickerRowRender,
    NgpDatePickerCellRender,
    NgpDatePickerDateButton,
  ],
  providers: [
    provideIcons({ lucideChevronLeft, lucideChevronRight }),
    provideValueAccessor(DatePicker),
  ],
  host: {
    '(focusout)': 'onTouched?.()',
  },
  templateUrl: './date-picker.html',
  styleUrl: './date-picker.scss',
})
export class DatePicker implements ControlValueAccessor {
  private readonly state = injectDatePickerState<Date>();

  /**
   * Get the current focused date in string format.
   * @returns The focused date in "February 2024" format.
   */
  readonly label = computed(
    () =>
      `${this.state()
        .focusedDate()
        .toLocaleString('default', { month: 'long' })} ${this.state()
        .focusedDate()
        .getFullYear()}`
  );

  /**
   * The onChange callback function for the date picker.
   */
  private onChange?: ChangeFn<Date | undefined>;

  /**
   * The onTouched callback function for the date picker.
   */
  protected onTouched?: TouchedFn;

  constructor() {
    // Whenever the user interacts with the date picker, call the onChange function with the new value.
    this.state().dateChange.subscribe((date) => this.onChange?.(date));
  }

  writeValue(date: Date): void {
    this.state().date.set(date);
  }

  registerOnChange(fn: ChangeFn<Date | undefined>): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: TouchedFn): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.state().disabled.set(isDisabled);
  }
}

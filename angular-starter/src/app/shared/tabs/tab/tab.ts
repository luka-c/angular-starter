import { Component, input, TemplateRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-tab',
  imports: [],
  templateUrl: './tab.html',
  styleUrl: './tab.scss',
})
export class Tab {
  /**
   * The value of the tab.
   */
  readonly value = input<string>();

  /**
   * The label of the tab.
   */
  readonly label = input<string>();

  /**
   * The content of the tab.
   */
  readonly content = viewChild.required<TemplateRef<void>>('content');
}

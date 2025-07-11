import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChildren, model } from '@angular/core';
import {
  NgpTabButton,
  NgpTabList,
  NgpTabPanel,
  NgpTabset,
} from 'ng-primitives/tabs';
import { Tab } from './tab/tab';

@Component({
  selector: 'app-tabs',
  imports: [NgpTabset, NgpTabButton, NgpTabList, NgpTabPanel, NgTemplateOutlet],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
})
export class Tabs {
  /**
   * The value of the selected tab.
   */
  readonly value = model<string>();

  /**
   * The tabs in the group.
   */
  readonly tabs = contentChildren(Tab);
}

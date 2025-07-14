import { Component, signal } from '@angular/core';
import { Button } from './shared/button/button';
import { Accordion } from './shared/accordion/accordion';
import { AccordionItem } from './shared/accordion/accordion-item/accordion-item';
import { PopoverTrigger } from './shared/popover/popover-trigger';
import { Tabs } from './shared/tabs/tabs';
import { Tab } from './shared/tabs/tab/tab';
import { Dialog } from './shared/dialog/dialog';
import { NgpDialogTrigger } from 'ng-primitives/dialog';
import { Pagination } from './shared/pagination/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Checkbox } from './shared/forms/checkbox/checkbox';

@Component({
  selector: 'app-root',
  imports: [
    Button,
    Accordion,
    AccordionItem,
    PopoverTrigger,
    Tabs,
    Tab,
    Dialog,
    NgpDialogTrigger,
    FormsModule,
    ReactiveFormsModule,
    Pagination,
    Checkbox,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  checked = signal(true);

  page = signal<number>(1);

  onPaginationChange(value: number) {
    this.page.set(value);
  }

  setCheckExternally() {
    this.checked.set(false);
  }

  currentPage = 1;
}

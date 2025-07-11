import { Component, signal } from '@angular/core';
import { Button } from './shared/button/button';
import { Accordion } from './shared/accordion/accordion';
import { AccordionItem } from './shared/accordion/accordion-item/accordion-item';
import { PopoverTrigger } from './shared/popover/popover-trigger';

@Component({
  selector: 'app-root',
  imports: [Button, Accordion, AccordionItem, PopoverTrigger],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  checked = signal(true);
}

import { Component } from '@angular/core';
import { NgpAccordion } from 'ng-primitives/accordion';

@Component({
  selector: 'app-accordion',
  imports: [],
  hostDirectives: [
    {
      directive: NgpAccordion,
      inputs: [
        'ngpAccordionValue:value',
        'ngpAccordionType:type',
        'ngpAccordionCollapsible:collapsible',
        'ngpAccordionDisabled:disabled',
        'ngpAccordionOrientation:orientation',
      ],
    },
  ],
  templateUrl: './accordion.html',
  styleUrl: './accordion.scss',
})
export class Accordion {}

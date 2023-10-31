import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NgtwAccordionPanelComponent } from './accordion-panel.component';

@Component({
  selector: 'ngtw-accordion-content',
  template: `
    <div class="py-5 px-5 dark:bg-gray-900"
         *ngIf="accordionPanel.open">
      <ng-content></ng-content>
    </div>`,
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class NgtwAccordionContentComponent {
  constructor(readonly accordionPanel: NgtwAccordionPanelComponent) { }
}

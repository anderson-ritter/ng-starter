import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgtwAccordionContentComponent } from './accordion-content.component';
import { NgtwAccordionPanelComponent } from './accordion-panel.component';
import { NgtwAccordionTitleComponent } from './accordion-title.component';
import { NgtwAccordionComponent } from './accordion.component';

@NgModule({
  declarations: [
    NgtwAccordionComponent,
    NgtwAccordionTitleComponent,
    NgtwAccordionContentComponent,
    NgtwAccordionPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgtwAccordionComponent,
    NgtwAccordionTitleComponent,
    NgtwAccordionContentComponent,
    NgtwAccordionPanelComponent
  ]
})
export class NgtwAccordionModule { }

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { NgtwAccordionModule } from './components/accordion';
import { NgtwBadgeModule } from './components/badge';
import { NgtwButtonModule } from './components/button/button.module';
import { NgtwDropdownModule } from './components/dropdown';
import { NgtwIconModule } from './components/icon';
import { SanitizeHtmlPipe } from './pipes';

const COMPONENTS: (any[] | Type<any>)[] = [];

const SERVICES: (any[] | Type<any>)[] = [];

const PIPES: (any[] | Type<any>)[] = [
  SanitizeHtmlPipe
];

const DIRECTIVES: (any[] | Type<any>)[] = [];

@NgModule({
  imports: [
    CommonModule,

    NgtwBadgeModule,
    NgtwButtonModule,
    NgtwDropdownModule,
    NgtwIconModule,
    NgtwAccordionModule
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES
  ],
  exports: [
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES,
    NgtwBadgeModule,
    NgtwButtonModule,
    NgtwDropdownModule,
    NgtwIconModule,
    NgtwAccordionModule
  ],
  providers: [
    ...SERVICES
  ],
})
export class NgtwModule { }

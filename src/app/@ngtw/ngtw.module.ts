import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { BadgeModule } from './components/badge';
import { DropdownModule } from './components/dropdown';
import { IconModule } from './components/icon';
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

    BadgeModule,
    DropdownModule,
    IconModule
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
    BadgeModule,
    DropdownModule,
    IconModule
  ],
  providers: [
    ...SERVICES
  ],
})
export class NgtwModule { }

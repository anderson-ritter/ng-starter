import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

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
    NgtwIconModule
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
    NgtwIconModule
  ],
  providers: [
    ...SERVICES
  ],
})
export class NgtwModule { }

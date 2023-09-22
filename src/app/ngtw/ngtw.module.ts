import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BadgeComponent } from './components/badge';
import { DropdownComponent, DropdownTriggerForDirective } from './components/dropdown';
import { IconComponent } from './components/icon';
import { SanitizeHtmlPipe } from './pipes';

const COMPONENTS: (any[] | Type<any>)[] = [
  BadgeComponent,
  IconComponent,
  DropdownComponent
];

const SERVICES: (any[] | Type<any>)[] = [];

const PIPES: (any[] | Type<any>)[] = [
  SanitizeHtmlPipe
];

const DIRECTIVES: (any[] | Type<any>)[] = [
  DropdownTriggerForDirective
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES
  ],
  exports: [
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES
  ],
  providers: [
    ...SERVICES
  ],
})
export class NgtwModule { }

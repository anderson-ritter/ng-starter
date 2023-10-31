import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgtwDropdownItemDirective } from './dropdown-item.directive';
import { NgtwDropdownTriggerForDirective } from './dropdown-trigger-for.directive';
import { NgtwDropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgtwDropdownComponent,
    NgtwDropdownTriggerForDirective,
    NgtwDropdownItemDirective
  ],
  exports: [
    NgtwDropdownComponent,
    NgtwDropdownTriggerForDirective,
    NgtwDropdownItemDirective
  ]
})
export class NgtwDropdownModule { }

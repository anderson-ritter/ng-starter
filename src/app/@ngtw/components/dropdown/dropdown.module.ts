import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgtwDropdownItemDirective } from './dropdown-item.directive';
import { NgtwDropdownTriggerForDirective } from './dropdown-trigger-for.directive';
import { NgtwDropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [
    NgtwDropdownComponent,
    NgtwDropdownTriggerForDirective,
    NgtwDropdownItemDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgtwDropdownComponent,
    NgtwDropdownTriggerForDirective,
    NgtwDropdownItemDirective
  ]
})
export class NgtwDropdownModule { }

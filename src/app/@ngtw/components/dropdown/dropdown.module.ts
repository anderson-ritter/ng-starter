import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DropdownItemDirective } from './dropdown-item.directive';
import { DropdownTriggerForDirective } from './dropdown-trigger-for.directive';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [
    DropdownComponent,
    DropdownTriggerForDirective,
    DropdownItemDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownComponent,
    DropdownTriggerForDirective,
    DropdownItemDirective
  ]
})
export class DropdownModule { }

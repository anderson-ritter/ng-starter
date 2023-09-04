import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddonDirective, HelperDirective, IconDirective, InputDirective, LabelDirective } from './directives';
import { FormFieldComponent } from './form-field.component';

const DECLARATIONS = [
  FormFieldComponent,
  InputDirective,
  LabelDirective,
  HelperDirective,
  IconDirective,
  AddonDirective,
];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [CommonModule],
  exports: [...DECLARATIONS],
})
export class FormFieldModule { }

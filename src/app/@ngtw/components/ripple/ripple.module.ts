import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgtwRippleDirective } from './ripple.directive';

@NgModule({
  declarations: [
    NgtwRippleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgtwRippleDirective
  ]
})
export class NgtwRippleModule { }

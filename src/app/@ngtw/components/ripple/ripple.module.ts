import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgtwRippleDirective } from './ripple.directive';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgtwRippleDirective
  ],
  exports: [
    NgtwRippleDirective
  ]
})
export class NgtwRippleModule { }

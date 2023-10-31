import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgtwRippleDirective } from '../ripple/ripple.directive';
import { NgtwButtonComponent } from './button.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgtwRippleDirective,
    NgtwButtonComponent
  ],
  exports: [
    NgtwButtonComponent
  ]
})
export class NgtwButtonModule { }

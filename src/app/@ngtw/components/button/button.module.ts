import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgtwRippleModule } from '../ripple/ripple.module';
import { NgtwButtonComponent } from './button.component';

@NgModule({
  declarations: [
    NgtwButtonComponent
  ],
  imports: [
    CommonModule,
    NgtwRippleModule
  ],
  exports: [
    NgtwButtonComponent
  ]
})
export class NgtwButtonModule { }

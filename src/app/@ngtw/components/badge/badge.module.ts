import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgtwBadgeComponent } from './badge.component';

@NgModule({
  declarations: [
    NgtwBadgeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NgtwBadgeComponent
  ]
})
export class NgtwBadgeModule { }

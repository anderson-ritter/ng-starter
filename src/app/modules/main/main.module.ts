import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MainGuard } from './main.guard';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  providers: [
    MainGuard
  ]
})
export class MainModule { }

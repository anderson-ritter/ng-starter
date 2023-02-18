import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../../modules/shared';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SigninRoutingModule } from './signin-routing.module';



@NgModule({
  declarations: [
    SigninPageComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    SharedModule
  ]
})
export class SigninModule { }

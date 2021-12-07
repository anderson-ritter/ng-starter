import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../../../shared/shared.module';
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

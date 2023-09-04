import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IfIsInRoleDirective, IfNotIsInRoleDirective } from './directives';
import { AuthService } from './services';

@NgModule({
  declarations: [
    IfIsInRoleDirective,
    IfNotIsInRoleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IfIsInRoleDirective,
    IfNotIsInRoleDirective
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthService } from './auth.service';
import { AuthStoreEffects } from './effects';
import { AuthHttpInterceptor } from './auth-http.interceptor';
import { featureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', featureReducer),
    EffectsModule.forFeature([AuthStoreEffects])
  ],
  providers: [
    AuthStoreEffects,
    AuthService,
    AuthHttpInterceptor
  ]
})
export class AuthStoreModule { }

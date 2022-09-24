import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthStoreEffects } from './effects';
import { featureReducer } from './reducer';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', featureReducer),
    EffectsModule.forFeature([AuthStoreEffects])
  ],
  providers: [
    AuthStoreEffects,
    AuthService
  ]
})
export class AuthStoreModule { }

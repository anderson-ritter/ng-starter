import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppStoreEffects } from './effects';
import { featureReducer } from './reducer';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('app', featureReducer),
    EffectsModule.forFeature([AppStoreEffects])
  ],
  providers: [AppStoreEffects]
})
export class AppStoreModule { }

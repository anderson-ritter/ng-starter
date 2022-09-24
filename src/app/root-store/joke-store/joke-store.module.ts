import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { JokeStoreEffects } from './effects';
import { JokeService } from './services/joke.service';
import { featureReducer } from './reducer';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('jokes', featureReducer),
    EffectsModule.forFeature([JokeStoreEffects])
  ],
  providers: [
    JokeStoreEffects,
    JokeService
  ]
})
export class JokeStoreModule { }

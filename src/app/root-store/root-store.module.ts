import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment as env } from './../../environments/environment';
import { AuthStoreModule } from './auth-store';
import { CoreStoreModule } from './core-store';
import { JokeStoreModule } from './joke-store';
import { metaReducers } from './reducers';
import { RouterStoreModule } from './router-store';
import { SettingsStoreModule } from './settings-store';

@NgModule({
  imports: [
    CommonModule,
    AuthStoreModule,
    CoreStoreModule,
    JokeStoreModule,
    RouterStoreModule,
    SettingsStoreModule,
    StoreModule.forRoot<any>({}, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      name: 'NG RETURNS',
      logOnly: env.debug
    }),
    StoreRouterConnectingModule
  ],
  declarations: []
})
export class RootStoreModule { }

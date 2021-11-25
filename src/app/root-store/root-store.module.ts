import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../../environments/environment';
import { AppStoreModule } from './app-store';
import { AuthStoreModule } from './auth-store';
import { metaReducers } from './reducers';
import { RouterStoreModule } from './router-store';

@NgModule({
  imports: [
    CommonModule,
    AppStoreModule,
    RouterStoreModule,
    AuthStoreModule,
    StoreModule.forRoot<any>({}, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      name: 'NG RETURNS',
      logOnly: !environment.production
    }),
    StoreRouterConnectingModule
  ],
  declarations: []
})
export class RootStoreModule { }

import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, isDevMode, LOCALE_ID } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { environment as env } from './../environments/environment';
import { routes } from './app.routes';
import { AuthModule } from './auth';
import { USER_ROLES } from './auth/providers';
import { SharedModule } from './shared';
import { coreEffects, coreReducers } from './store/core';
import { customersEffects, customersReducers } from './store/customers';
import { messagesEffects, messagesReducers } from './store/messages';
import { metaReducers } from './store/meta-reducers';
import { CustomRouterStateSerializer } from './store/router';
import { settingsEffects, settingsReducers } from './store/settings';
import { DEFAULT_ICON_TYPE } from './flowbite/components/icon/icon.properties';

registerLocaleData(ptBr, 'pt');

const { auth, app } = env;

const initializeKeycloak = (keycloak: KeycloakService) => {
  return () =>
    keycloak.init({
      config: {
        url: auth.url,
        realm: auth.realm,
        clientId: auth.clientId
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
        checkLoginIframeInterval: 60,
        flow: 'standard',
        pkceMethod: 'S256',
        responseMode: 'query'
      },
      bearerExcludedUrls: ['/assets']
    });
};

const getUserRoles = (keycloak: KeycloakService) => keycloak.getUserRoles();

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideStore({
      core: coreReducers,
      messages: messagesReducers,
      settings: settingsReducers,
      customers: customersReducers,
      router: routerReducer
    }, { metaReducers }),
    provideRouterStore({
      serializer: CustomRouterStateSerializer
    }),
    provideEffects([
      coreEffects,
      messagesEffects,
      settingsEffects,
      customersEffects
    ]),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    importProvidersFrom(
      KeycloakAngularModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => new TranslateHttpLoader(http, `${app.i18nPrefix}/assets/i18n/`, '.json'),
          deps: [HttpClient]
        }
      }),
      AuthModule,
      SharedModule
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
    {
      provide: USER_ROLES,
      useFactory: getUserRoles,
      multi: false,
      deps: [KeycloakService]
    },
    { provide: DEFAULT_ICON_TYPE, useValue: 'rounded' },
    { provide: LOCALE_ID, useValue: 'pt' }
  ]
};

import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom, isDevMode, LOCALE_ID } from '@angular/core';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats } from '@angular/material/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from './../environments/environment.prod';
import { routes } from './app.routes';
import { SharedModule } from './shared/shared.module';
import { authEffects, authReducers } from './store/auth';
import { coreEffects, coreReducers } from './store/core';
import { messagesEffects, messagesReducers } from './store/messages';
import { metaReducers } from './store/meta-reducers';
import { CustomRouterStateSerializer } from './store/router';
import { settingsEffects, settingsReducers } from './store/settings';

registerLocaleData(ptBr, 'pt');

const { parse, display } = MAT_MOMENT_DATE_FORMATS;

const MomentFormats: MatDateFormats = {
  parse: {
    ...parse,
    dateInput: 'L',
  },
  display: {
    ...display,
    dateInput: 'L'
  }
};

const initializeApp = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    // Do some asynchronous stuff

    setTimeout(() => {
      resolve(null);
    }, 5000);
  });
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideStore({
      core: coreReducers,
      auth: authReducers,
      messages: messagesReducers,
      settings: settingsReducers,
      router: routerReducer
    }, { metaReducers }),
    provideRouterStore({
      serializer: CustomRouterStateSerializer
    }),
    provideEffects([
      coreEffects,
      authEffects,
      messagesEffects,
      settingsEffects,
    ]),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => new TranslateHttpLoader(http, `${environment.app.i18nPrefix}/assets/i18n/`, '.json'),
          deps: [HttpClient]
        }
      }),
      SharedModule
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: () => initializeApp,
      multi: true
    },
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: false } },
    { provide: MAT_DATE_FORMATS, useValue: MomentFormats },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] }
  ]
};

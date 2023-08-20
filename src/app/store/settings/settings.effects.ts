import { inject } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { distinctUntilChanged, filter, tap, withLatestFrom } from 'rxjs/operators';

import { LocalStorageService, TitleService } from '../../shared/services';
import { selectRouteStateUrl } from './../router/router.selectors';
import { changeTheme } from './settings.actions';
import { selectLanguage, selectSettings, selectTheme } from './settings.selectors';

export const changeTheme$ = createEffect(
  (store$: Store = inject(Store), actions$: Actions = inject(Actions)) => {
    return actions$.pipe(
      ofType(ROOT_EFFECTS_INIT, changeTheme),
      withLatestFrom(store$.pipe(select(selectTheme))),
      tap(([_, theme]) => {
        const classList = document.documentElement.classList;
        const toRemove = Array.from(classList).filter((item: string) => ['light', 'dark'].includes(item));

        if (toRemove.length) {
          classList.remove(...toRemove);
        }

        if (theme) {
          classList.add(theme);
          return;
        }

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          classList.add('dark');
        }
      })
    );
  },
  { functional: true, dispatch: false }
);

export const setLanguageEffect$ = createEffect(
  (
    store$: Store = inject(Store),
    translateService$: TranslateService = inject(TranslateService)
  ) => {
    return store$.pipe(
      select(selectLanguage),
      distinctUntilChanged(),
      tap(language => translateService$.use(language))
    )
  },
  { functional: true, dispatch: false }
);

export const setTitleEffect$ = createEffect(
  (
    store$: Store = inject(Store),
    titleService$: TitleService = inject(TitleService),
    router: Router = inject(Router)
  ) => {
    return router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        withLatestFrom(store$.pipe(select(selectRouteStateUrl))),
        tap(([_, state]) => {
          const { title = '' } = state?.data ?? {};
          titleService$.setTitle(title);
        })
      );
  },
  { functional: true, dispatch: false }
);

export const persistSettingsEffect$ = createEffect(
  (
    store$: Store = inject(Store),
    storageService$: LocalStorageService = inject(LocalStorageService)
  ) => {
    return store$.pipe(
      select(selectSettings),
      distinctUntilChanged(),
      tap(settings => {
        storageService$.setItem('settings.theme', settings.theme);
        storageService$.setItem('settings.language', settings.language);
      })
    )
  },
  { functional: true, dispatch: false }
);

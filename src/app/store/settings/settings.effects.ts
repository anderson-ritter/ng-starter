import { inject } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { distinctUntilChanged, filter, tap, withLatestFrom } from 'rxjs/operators';

import { LocalStorageService, TitleService } from '../../shared/services';
import { changeLanguage, changeTheme } from './settings.actions';
import { selectLanguage, selectSettings, selectTheme } from './settings.selectors';

export const changeTheme$ = createEffect(
  (store$: Store = inject(Store), actions$: Actions = inject(Actions)) => {
    return actions$.pipe(
      ofType(ROOT_EFFECTS_INIT, changeTheme),
      withLatestFrom(store$.pipe(select(selectTheme))),
      tap(([_, theme]) => {
        const classList = document.documentElement.classList;
        const toRemove = Array.from(classList).filter((item: string) =>
          item.includes('-theme')
        );
        if (toRemove.length) {
          classList.remove(...toRemove);
        }
        classList.add(theme);
      })
    );
  },
  { functional: true, dispatch: false }
);

export const setLanguageEffect$ = createEffect(
  (store$: Store = inject(Store), translateService$: TranslateService = inject(TranslateService)) => {
    return store$.pipe(
      select(selectLanguage),
      distinctUntilChanged(),
      tap(language => translateService$.use(language))
    )
  },
  { functional: true, dispatch: false }
);

export const setTitleEffect$ = createEffect(
  (actions$: Actions = inject(Actions), titleService$: TitleService = inject(TitleService), translateService$: TranslateService = inject(TranslateService), router: Router = inject(Router)) => {
    return merge(
      actions$.pipe(ofType(changeLanguage)),
      router.events.pipe(filter(event => event instanceof ActivationEnd))
    ).pipe(
      tap(() => {
        titleService$.setTitle(
          router.routerState.snapshot.root,
          translateService$
        );
      })
    )
  },
  { functional: true, dispatch: false }
);

export const persistSettingsEffect$ = createEffect(
  (store$: Store = inject(Store), storageService$: LocalStorageService = inject(LocalStorageService)) => {
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

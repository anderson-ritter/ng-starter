import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { distinctUntilChanged, tap } from 'rxjs/operators';

import { LocalStorageService, NotificationService } from '../../shared/services';
import { throwError } from './core.actions';
import { Store, select } from '@ngrx/store';
import { selectCoreState } from './core.selectors';

export const showErrorEffect$ = createEffect(
  (actions: Actions = inject(Actions), notificationService: NotificationService = inject(NotificationService)) => {
    return actions
      .pipe(
        ofType(throwError),
        tap(({ error }) => {
          notificationService.error(error);
        })
      )
  },
  { functional: true, dispatch: false }
);


export const persistSettings$ = createEffect(
  (store$: Store = inject(Store), storageService$: LocalStorageService = inject(LocalStorageService)) => {
    return store$
      .pipe(
        select(selectCoreState),
        distinctUntilChanged(),
        tap(core => {
          storageService$.setItem('core.layout.sidebar.style', core.layout.sidebar.style);
        })
      );
  },
  { functional: true, dispatch: false }
);

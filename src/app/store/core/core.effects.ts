import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { distinctUntilChanged, tap } from 'rxjs/operators';

import { SidebarService } from '../../ngtw/services';
import { LocalStorageService, NotificationService } from '../../shared/services';
import { throwError } from './core.actions';
import { selectCoreState } from './core.selectors';

export const showErrorEffect$ = createEffect(
  (
    actions: Actions = inject(Actions),
    notificationService: NotificationService = inject(NotificationService)
  ) => {
    return actions
      .pipe(
        ofType(throwError),
        tap(({ error }) => notificationService.error(error))
      )
  },
  {
    functional: true,
    dispatch: false
  }
);

export const updateSettings$ = createEffect(
  (
    store$: Store = inject(Store),
    storageService$: LocalStorageService = inject(LocalStorageService),
    sidebarService$: SidebarService = inject(SidebarService)
  ) => {
    return store$
      .pipe(
        select(selectCoreState),
        distinctUntilChanged(),
        tap(({ layout: { sidebar: { collapsed } } }) => {
          sidebarService$.setCollapsed(collapsed);
          storageService$.setItem('core.layout.sidebar.collapsed', collapsed);
        })
      );
  },
  {
    functional: true,
    dispatch: false
  }
);

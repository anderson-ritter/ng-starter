import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, tap } from 'rxjs/operators';

import { NotificationService } from '../../shared/services';
import { startMediumBreakpoint, startSmallBreakpoint, throwError } from './core.actions';

export const startSmallBreakpoint$ = createEffect(
  (breakpointObserver: BreakpointObserver = inject(BreakpointObserver)) => {
    return breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small
      ])
      .pipe(
        filter(value => value.matches),
        map(() => startSmallBreakpoint())
      )
  },
  { functional: true }
);

export const startMediumBreakpoint$ = createEffect(
  (breakpointObserver: BreakpointObserver = inject(BreakpointObserver)) => {
    return breakpointObserver
      .observe([
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
      ])
      .pipe(
        filter(value => value.matches),
        map(() => startMediumBreakpoint())
      )
  },
  { functional: true }
);

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

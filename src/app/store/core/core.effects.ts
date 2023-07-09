import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { NotificationService } from '../../shared/services';
import { throwError } from './core.actions';

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

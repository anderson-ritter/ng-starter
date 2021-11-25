import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { NotificationService } from '../../shared/services/notification.service';
import * as featureActions from './actions';

@Injectable()
export class AppStoreEffects {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private notificationService: NotificationService,
    private actions$: Actions) { }

  startSmallBreakepoint: Observable<Action> = createEffect(() =>
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small
      ])
      .pipe(
        filter(value => value.matches),
        map(() => new featureActions.StartSmallBreakpointAction())
      )
  );

  initializeEffect: Observable<Action> = createEffect(() =>
    this.breakpointObserver
      .observe([
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
      ])
      .pipe(
        filter(value => value.matches),
        map(() => new featureActions.StartMediumBreakpointAction())
      )
  );

  showErrorEffect$ = createEffect(() => this.actions$
    .pipe(
      ofType<featureActions.ThrowErrorAction>(featureActions.ActionTypes.THROW_ERROR),
      tap(action => {
        this.notificationService.error(action.payload.error);
      })
    ),
    { dispatch: false }
  );
}

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { merge, Observable, of } from 'rxjs';
import { distinctUntilChanged, filter, map, tap, withLatestFrom } from 'rxjs/operators';
import { NotificationService } from '../../shared/services/notification.service';
import { RootStoreState } from './../../root-store';
import { LocalStorageService } from './../../shared/services/local-storage.service';
import * as featureActions from './actions';
import * as selectors from './selectors';

const INIT = of('ng-returns-init-effect-trigger');

@Injectable()
export class AppStoreEffects {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private notificationService: NotificationService,
    private store$: Store<RootStoreState.AppState>,
    private localStorageService: LocalStorageService,
    private actions$: Actions) { }

  updateThemeEffect$ = createEffect(() =>
    merge(INIT, this.actions$.pipe(ofType<featureActions.ChangeThemeAction>(featureActions.ActionTypes.CHANGE_THEME)))
      .pipe(
        withLatestFrom(this.store$.pipe(select(selectors.selectTheme))),
        tap(([action, theme]) => {
          const classList = document.documentElement.classList;
          const toRemove = Array.from(classList).filter((item: string) =>
            item.includes('-theme')
          );
          if (toRemove.length) {
            classList.remove(...toRemove);
          }
          classList.add(theme);
        })
      ),
    { dispatch: false }
  );

  persistSettingsEffect$ = createEffect(() =>
    this.store$.pipe(
      select(selectors.selectSettings),
      distinctUntilChanged(),
      tap(settings => {
        this.localStorageService.setItem('app.settings', settings);
      })
    ),
    { dispatch: false }
  );

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

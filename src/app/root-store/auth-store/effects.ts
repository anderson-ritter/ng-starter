import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { map, Observable, of, switchMap } from 'rxjs';
import { catchError, distinctUntilChanged, tap } from 'rxjs/operators';
import { RootStoreState } from './../../root-store';
import { AuthService } from './../../shared/services/auth.service';
import { LocalStorageService } from './../../shared/services/local-storage.service';
import * as featureActions from './actions';
import * as featureSelectors from './selectors';

@Injectable()
export class AuthStoreEffects {
  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private actions$: Actions,
    private store$: Store<RootStoreState.AppState>) { }

  signInEffect$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
      ofType<featureActions.SignInAction>(featureActions.ActionTypes.SIGNIN),
      switchMap((action) => {
        return this.authService.signIn(action.payload.username, action.payload.password)
          .pipe(
            map(token => {
              this.router.navigate(['/']);
              return new featureActions.SignInSuccessAction({ token });
            }),
            catchError(error => {
              return of(new featureActions.SignInFailureAction({ error }));
            })
          )
      }),
      catchError(error => {
        return of(new featureActions.SignInFailureAction({ error }));
      })
    )
  );

  signOutEffect$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
      ofType<featureActions.SignOutAction>(featureActions.ActionTypes.SIGNOUT),
      tap((action) => {
        this.router.navigate(['/signin']);
      })
    ),
    { dispatch: false }
  );

  signInSuccessEffect$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
      ofType<featureActions.SignInSuccessAction>(featureActions.ActionTypes.SIGNIN_SUCCESS),
      switchMap((action) => {
        return this.authService.getUserInfo()
          .pipe(
            map(userInfo => {
              return new featureActions.GetUserInfoSuccessAction({ userInfo });
            }),
            catchError(error => {
              return of(new featureActions.GetUserInfoFailureAction({ error }));
            })
          )
      }),
      catchError(error => {
        return of(new featureActions.GetUserInfoFailureAction({ error }));
      })
    )
  );

  persistAuthEffect$ = createEffect(() =>
    this.store$.pipe(
      select(featureSelectors.selectAuthState),
      distinctUntilChanged(),
      tap(settings => {
        this.localStorageService.setItem('auth.is-authenticated', settings.isAuthenticated);
        this.localStorageService.setItem('auth.auth-data', settings.authData);
      })
    ),
    { dispatch: false }
  );
}

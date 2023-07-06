import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, of } from 'rxjs';
import { catchError, distinctUntilChanged, exhaustMap, tap, withLatestFrom } from 'rxjs/operators';

import { AuthService, LocalStorageService } from '../../shared/services';
import { fetchUserInfoFailure, fetchUserInfoSuccess, signIn, signInFailure, signInSuccess, signOut } from './auth.actions';
import { selectAuthState } from './auth.selectors';

export const signIn$ = createEffect(
  (
    router$: Router = inject(Router),
    authService$: AuthService = inject(AuthService),
    actions$: Actions = inject(Actions)
  ) => {
    return actions$
      .pipe(
        ofType(signIn),
        exhaustMap(({ username, password }) => {
          return authService$.signIn(username, password)
            .pipe(
              map(token => {
                router$.navigate(['/']);
                return signInSuccess({ token });
              }),
              catchError(error => {
                return of(signInFailure({ error }));
              })
            )
        }),
        catchError(error => {
          return of(signInFailure({ error }));
        })
      );
  },
  { functional: true }
);

export const signOut$ = createEffect(
  (
    router$: Router = inject(Router),
    actions$: Actions = inject(Actions)
  ) => {
    return actions$
      .pipe(
        ofType(signOut),
        tap(() => {
          router$.navigate(['/signin']);
        })
      );
  },
  { functional: true, dispatch: false }
);

export const signInSuccess$ = createEffect(
  (
    store$: Store = inject(Store),
    authService$: AuthService = inject(AuthService),
    actions$: Actions = inject(Actions)
  ) => {
    return actions$
      .pipe(
        ofType(signInSuccess),
        withLatestFrom(store$.pipe(select(selectAuthState))),
        exhaustMap(([_, auth]) => {
          const expiresIn = Object.getValueOrDefault<number>(auth.token?.expires_in, 0);
          const timeout = expiresIn * 1000;

          setTimeout(
            () => { store$.dispatch(signOut()); },
            timeout
          );

          return authService$.getUserInfo()
            .pipe(
              map(userInfo => {
                return fetchUserInfoSuccess({ userInfo });
              }),
              catchError(error => {
                return of(fetchUserInfoFailure({ error }));
              })
            )
        })
      );
  },
  { functional: true }
);

export const persistSettings$ = createEffect(
  (store$: Store = inject(Store), storageService$: LocalStorageService = inject(LocalStorageService)) => {
    return store$
      .pipe(
        select(selectAuthState),
        distinctUntilChanged(),
        tap(settings => {
          storageService$.setItem('auth.is-authenticated', settings.isAuthenticated);

          if (settings.user) {
            storageService$.setItem('auth.user', settings.user);
          } else {
            storageService$.removeItem('auth.user');
          }

          if (settings.token) {
            storageService$.setItem('auth.token', settings.token);
          } else {
            storageService$.removeItem('auth.token');
          }
        })
      );
  },
  { functional: true, dispatch: false }
);

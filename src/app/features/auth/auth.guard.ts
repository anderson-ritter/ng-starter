import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, map, Observable, of, tap } from 'rxjs';

import { AuthStoreSelectors, RootStoreState } from '../root-store';

@Injectable()
export class AuthGuard  {

  constructor(
    private router: Router,
    private store$: Store<RootStoreState.AppState>
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.isUnauthenticated();
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.isUnauthenticated();
  }


  private isUnauthenticated(): Observable<boolean> {
    return this.store$.select(AuthStoreSelectors.selectIsAuthenticated)
      .pipe(
        tap(isAuthenticated => {
          if (isAuthenticated) {
            this.router.navigate(['/dashboard']);
            return;
          }
        }),
        map(isAuthenticated => !isAuthenticated),
        catchError(() => of(false))
      );
  }
}

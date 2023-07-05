import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, Observable, of, tap } from 'rxjs';

import { AuthStoreSelectors, RootStoreState } from '../root-store';

@Injectable()
export class MainGuard  {

  constructor(
    private router: Router,
    private store$: Store<RootStoreState.AppState>
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.isAuthenticated();
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.isAuthenticated();
  }


  private isAuthenticated(): Observable<boolean> {
    return this.store$.select(AuthStoreSelectors.selectIsAuthenticated)
      .pipe(
        tap(isAuthenticated => {
          if (!isAuthenticated) {
            this.router.navigate(['/signin']);
            return;
          }
        }),
        catchError(() => of(false))
      );
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { RootStoreState } from '../..';
import { AuthStoreSelectors } from '..';


@Injectable()
export class AuthorizedGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private store$: Store<RootStoreState.AppState>) { }

  canActivate(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
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

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(childRoute, state);
  }
}

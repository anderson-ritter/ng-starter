import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import { AuthStoreActions, AuthStoreSelectors, RootStoreState } from './../../../root-store';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor(private store$: Store<RootStoreState.AppState>) { }

  addAuthHeader(request: HttpRequest<any>): Observable<HttpRequest<any>> {
    return this.store$.select(AuthStoreSelectors.selectToken)
      .pipe(
        take(1),
        map((token) => {
          if (!!token?.access_token) {
            const { token_type, access_token } = token;
            return request.clone({
              setHeaders: {
                Authorization: `${token_type} ${access_token}`
              }
            });
          }

          return request;
        }),
        catchError(() => of(request))
      );
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

    const unauthorizedUrls = [
      `${environment.auth.authority}/connect/token`
    ];

    if (!/^https?:\/\//.test(request.url) || unauthorizedUrls.includes(request.url)) {
      return next.handle(request);
    }

    // Handle request
    return this.addAuthHeader(request)
      .pipe(
        take(1),
        switchMap(req => {
          return next.handle(req);
        }),
        catchError(error => {
          if (error.status === 401) {
            this.store$.dispatch(
              new AuthStoreActions.UnauthorizedAction()
            );

            return of(error);
          }

          return throwError(() => new Error(error));
        })
      );
  }
}

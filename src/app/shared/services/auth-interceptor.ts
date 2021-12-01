import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import { RootStoreState } from '../../root-store';
import { AuthStoreActions, AuthStoreSelectors } from '../../root-store/auth-store';
import { environment } from './../../../environments/environment';
import { AuthService } from './auth.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private store$: Store<RootStoreState.AppState>,
    private authService: AuthService
  ) { }

  addAuthHeader(request: HttpRequest<any>): Observable<HttpRequest<any>> {
    return this.store$.select(AuthStoreSelectors.selectAuthData)
      .pipe(
        take(1),
        map((authData) => {
          if (!!authData?.accessToken) {
            const { tokenType, accessToken } = authData;
            return request.clone({
              setHeaders: {
                Authorization: `${tokenType} ${accessToken}`
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

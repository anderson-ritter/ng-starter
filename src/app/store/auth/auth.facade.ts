import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Token, UserInfo } from './../../shared/models/auth';
import {
  fetchUserInfo,
  fetchUserInfoFailure,
  fetchUserInfoSuccess,
  signIn,
  signInFailure,
  signInSuccess,
  signOut,
  unauthorized
} from './auth.actions';
import { selectIsAuthenticated, selectToken, selectUser } from './auth.selectors';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private readonly store: Store = inject(Store);

  readonly isAuthenticated$: Observable<boolean> = this.store.select(selectIsAuthenticated);
  readonly token$: Observable<Token | undefined> = this.store.select(selectToken);
  readonly user$: Observable<UserInfo | undefined> = this.store.select(selectUser);

  fetchUserInfo(): void {
    this.store.dispatch(fetchUserInfo());
  }

  fetchUserInfoSuccess(userInfo: UserInfo): void {
    this.store.dispatch(fetchUserInfoSuccess({ userInfo }));
  }

  fetchUserInfoFailure(error: string): void {
    this.store.dispatch(fetchUserInfoFailure({ error }));
  }

  signIn(username: string, password: string): void {
    this.store.dispatch(signIn({ username, password }));
  }

  signInSuccess(token: Token): void {
    this.store.dispatch(signInSuccess({ token }));
  }

  signInFailure(error: string): void {
    this.store.dispatch(signInFailure({ error }));
  }

  signOut(): void {
    this.store.dispatch(signOut());
  }

  unauthorized(): void {
    this.store.dispatch(unauthorized());
  }
}

import { Action } from '@ngrx/store';
import { AuthData } from './state';

export enum ActionTypes {
  SIGNIN = '[Auth] SignIn',
  SIGNIN_SUCCESS = '[Auth] SignIn Success',
  SIGNIN_FAILURE = '[Auth] SignIn Failure',
  SIGNOUT = '[Auth] SignOut',
  UNAUTHORIZED = '[Auth] Unauthorized',
}

export class SignInAction implements Action {
  readonly type = ActionTypes.SIGNIN;
  constructor(public payload: { username: string, password: string }) { }
}

export class SignInSuccessAction implements Action {
  readonly type = ActionTypes.SIGNIN_SUCCESS;
  constructor(public payload: { username: string, givenName: string, accessToken: string }) { }
}

export class SignInFailureAction implements Action {
  readonly type = ActionTypes.SIGNIN_FAILURE;
  constructor(public payload: { error: string }) { }
}

export class SignOutAction implements Action {
  readonly type = ActionTypes.SIGNOUT;
  constructor(public payload: { href: string }) { }
}

export class UnauthorizedAction implements Action {
  readonly type = ActionTypes.UNAUTHORIZED;
  constructor() { }
}

export type Actions = SignInAction
  | SignInSuccessAction
  | SignInFailureAction
  | SignOutAction
  | UnauthorizedAction;

import { Action } from '@ngrx/store';
import { Token } from './../../shared/models/accounts/token';
import { UserInfo } from './../../shared/models/accounts/user-info';

export enum ActionTypes {
  SIGNIN = '[Auth] SignIn',
  SIGNIN_SUCCESS = '[Auth] SignIn Success',
  SIGNIN_FAILURE = '[Auth] SignIn Failure',
  SIGNOUT = '[Auth] SignOut',
  UNAUTHORIZED = '[Auth] Unauthorized',
  GET_USER_INFO = '[Auth] Get User Info',
  GET_USER_INFO_SUCCESS = '[Auth] Get User Info Success',
  GET_USER_INFO_FAILURE = '[Auth] Get User Info Failure'
}

export class SignInAction implements Action {
  readonly type = ActionTypes.SIGNIN;
  constructor(public payload: { username: string, password: string }) { }
}

export class SignInSuccessAction implements Action {
  readonly type = ActionTypes.SIGNIN_SUCCESS;
  constructor(public payload: { token: Token }) { }
}

export class SignInFailureAction implements Action {
  readonly type = ActionTypes.SIGNIN_FAILURE;
  constructor(public payload: { error: string }) { }
}

export class SignOutAction implements Action {
  readonly type = ActionTypes.SIGNOUT;
  constructor() { }
}

export class UnauthorizedAction implements Action {
  readonly type = ActionTypes.UNAUTHORIZED;
  constructor() { }
}

export class GetUserInfoAction implements Action {
  readonly type = ActionTypes.GET_USER_INFO;
  constructor() { }
}

export class GetUserInfoSuccessAction implements Action {
  readonly type = ActionTypes.GET_USER_INFO_SUCCESS;
  constructor(public payload: { userInfo: UserInfo }) { }
}

export class GetUserInfoFailureAction implements Action {
  readonly type = ActionTypes.GET_USER_INFO_FAILURE;
  constructor(public payload: { error: string }) { }
}

export type Actions = SignInAction
  | SignInSuccessAction
  | SignInFailureAction
  | SignOutAction
  | UnauthorizedAction
  | GetUserInfoAction
  | GetUserInfoSuccessAction
  | GetUserInfoFailureAction;

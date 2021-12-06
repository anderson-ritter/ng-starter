import { Action } from '@ngrx/store';
import { Token, UserInfo } from './../../shared/models/auth';

export enum ActionTypes {
  SIGNIN = '@app/auth/sign-in',
  SIGNIN_SUCCESS = '@app/auth/sign-in-success',
  SIGNIN_FAILURE = '@app/auth/sign-in-failure',
  SIGNOUT = '@app/auth/sign-out',
  UNAUTHORIZED = '@app/auth/unauthorized',
  GET_USER_INFO = '@app/auth/get-user-info',
  GET_USER_INFO_SUCCESS = '@app/auth/get-user-info-success',
  GET_USER_INFO_FAILURE = '@app/auth/get-user-info-failure'
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

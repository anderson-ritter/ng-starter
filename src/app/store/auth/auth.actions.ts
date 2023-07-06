import { createAction, props } from '@ngrx/store';

import { Token, UserInfo } from '../../shared/models/auth';

export const actionKey = '[Auth]';

export const signIn = createAction(
  `${actionKey} SignIn`,
  props<{ username: string, password: string }>()
);

export const signInSuccess = createAction(
  `${actionKey} Sign In Success`,
  props<{ token: Token }>()
);

export const signInFailure = createAction(
  `${actionKey} Sign In Failure`,
  props<{ error: string }>()
);

export const signOut = createAction(
  `${actionKey} SignOut`
);

export const unauthorized = createAction(
  `${actionKey} Unauthorized`
);

export const fetchUserInfo = createAction(
  `${actionKey} Fetch User Info`
);

export const fetchUserInfoSuccess = createAction(
  `${actionKey} Fetch User Info Success`,
  props<{ userInfo: UserInfo }>()
);

export const fetchUserInfoFailure = createAction(
  `${actionKey} Fetch User Info Failure`,
  props<{ error: string }>()
);

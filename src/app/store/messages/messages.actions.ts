import { createAction, props } from '@ngrx/store';

import { Message } from './messages.state';

export const actionKey = '[Messages]';

export const addMessage = createAction(
  `${actionKey} Add Message`,
  props<{ message: Message }>()
);

export const deleteMessage = createAction(
  `${actionKey} Delete Message`,
  props<{ id: string }>()
);

export const deleteMessageSuccess = createAction(
`${actionKey} Delete Message Success`
);

export const deleteMessageError = createAction(
`${actionKey} Delete Message Error`
);

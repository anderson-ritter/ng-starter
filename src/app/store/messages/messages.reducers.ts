import { ActionReducer, createReducer, on } from '@ngrx/store';

import { addMessage, deleteMessage } from './messages.actions';
import { adapter, initialState, MessagesState } from './messages.state';

export const messagesReducers: ActionReducer<MessagesState> = createReducer(
  initialState,
  on(addMessage, (state: MessagesState, { message }) =>
    adapter.addOne(message, state)),
  on(deleteMessage, (state: MessagesState, { id }) =>
    adapter.removeOne(id, state))
);

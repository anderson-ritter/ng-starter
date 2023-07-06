import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { AppState } from './../../store';
import { Message, MessagesState } from './messages.state';

export const selectMessagesFeature: MemoizedSelector<AppState, MessagesState> =
  createFeatureSelector<MessagesState>('messages');

export const selectMessages: MemoizedSelector<AppState, Message[]> =
  createSelector(
    selectMessagesFeature,
    ({ entities }: MessagesState): Message[] =>
      Object.values(entities) as Message[]
  );

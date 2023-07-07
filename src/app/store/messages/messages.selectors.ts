import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { Message } from './../../shared/models/messages';
import { AppState } from './../../store';
import { MessagesState } from './messages.state';

export const selectMessagesFeature: MemoizedSelector<AppState, MessagesState> =
  createFeatureSelector<MessagesState>('messages');

export const selectMessages: MemoizedSelector<AppState, Message[]> =
  createSelector(
    selectMessagesFeature,
    ({ entities }: MessagesState): Message[] =>
      Object.values(entities) as Message[]
  );

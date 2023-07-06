import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs';

import { MessagesApiService } from '../../shared/services/messages-api.service';
import { deleteMessage, deleteMessageError, deleteMessageSuccess } from './messages.actions';

export const deleteMessage$ = createEffect(
  (actions$: Actions = inject(Actions), messagesApiService: MessagesApiService = inject(MessagesApiService)) => {
    return actions$.pipe(
      ofType(deleteMessage),
      mergeMap(({ id }) =>
        messagesApiService.deleteMessage(id).pipe(
          map(() => deleteMessageSuccess()),
          catchError(() => [deleteMessageError()])
        )
      )
    );
  },
  { functional: true }
);

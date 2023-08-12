import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Message } from '../../shared/models/messages';
import { addMessage, deleteMessage, readMessage } from './messages.actions';
import { selectMessages } from './messages.selectors';

@Injectable({ providedIn: 'root' })
export class MessagesStore {

  private readonly store: Store = inject(Store);

  readonly messages$: Observable<Message[]> = this.store.select(selectMessages);

  addMessage(message: Message): void {
    this.store.dispatch(addMessage({ message }));
  }

  deleteOne(id: string): void {
    this.store.dispatch(deleteMessage({ id }));
  }

  readMessage(id: string) {
    this.store.dispatch(readMessage({ id }));
  }
}

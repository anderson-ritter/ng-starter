import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { addMessage, deleteMessage } from './messages.actions';
import { selectMessages } from './messages.selectors';
import { Message } from './messages.state';

@Injectable({ providedIn: 'root' })
export class MessagesFacade {
  private readonly store: Store = inject(Store);

  readonly messages$: Observable<Message[]> = this.store.select(selectMessages);

  addMessage(message: Message): void {
    this.store.dispatch(addMessage({ message }));
  }

  deleteOne(id: string): void {
    this.store.dispatch(deleteMessage({ id }));
  }
}

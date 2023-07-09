import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { throwError } from './core.actions';
import { selectAppError } from './core.selectors';

@Injectable({ providedIn: 'root' })
export class CoreFacade {
  private readonly store: Store = inject(Store);

  readonly error$: Observable<any> = this.store.select(selectAppError);

  throwError(error: any): void {
    this.store.dispatch(throwError({ error }));
  }
}

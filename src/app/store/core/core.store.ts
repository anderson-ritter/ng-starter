import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Layout, Sidebar } from '../../shared/models/core';
import { throwError, toggleSidebarCollapsed } from './core.actions';
import { selectAppError, selectLayout, selectSidebar } from './core.selectors';

@Injectable({ providedIn: 'root' })
export class CoreStore {
  private readonly store: Store = inject(Store);

  readonly error$: Observable<any> = this.store.select(selectAppError);
  readonly layout$: Observable<Layout> = this.store.select(selectLayout);
  readonly sidebar$: Observable<Sidebar> = this.store.select(selectSidebar);

  throwError(error: any): void {
    this.store.dispatch(throwError({ error }));
  }

  toggleSidebarCollapsed(): void {
    this.store.dispatch(toggleSidebarCollapsed());
  }
}

import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppLayout, PageSize, SidebarMode } from './../../shared/models/layout';
import { startMediumBreakpoint, startSmallBreakpoint, throwError } from './core.actions';
import { selectAppError, selectLayout, selectLayoutPageSize, selectLayoutSidebarMode } from './core.selectors';

@Injectable({ providedIn: 'root' })
export class CoreFacade {
  private readonly store: Store = inject(Store);

  readonly error$: Observable<any> = this.store.select(selectAppError);
  readonly layout$: Observable<AppLayout> = this.store.select(selectLayout);
  readonly pageSize$: Observable<PageSize> = this.store.select(selectLayoutPageSize);
  readonly sidebarMode$: Observable<SidebarMode> = this.store.select(selectLayoutSidebarMode);

  startMediumBreakpoint(): void {
    this.store.dispatch(startMediumBreakpoint());
  }

  startSmallBreakpoint(): void {
    this.store.dispatch(startSmallBreakpoint());
  }

  throwError(error: any): void {
    this.store.dispatch(throwError({ error }));
  }
}

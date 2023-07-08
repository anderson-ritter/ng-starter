import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { catchError, map, of, tap } from 'rxjs';

import { AuthFacade } from './store/auth';

const isAuthenticated = () => {
  const store = inject(AuthFacade);
  const router = inject(Router);

  return store.isAuthenticated$
    .pipe(
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          router.navigate(['/signin']);
        }
      }),
      catchError(() => of(false))
    );
}

const isUnauthenticated = () => {
  const store = inject(AuthFacade);
  const router = inject(Router);

  return store.isAuthenticated$
    .pipe(
      tap(isAuthenticated => {
        if (isAuthenticated) {
          router.navigate(['/dashboard']);
        }
      }),
      map(isAuthenticated => !isAuthenticated),
      catchError(() => of(false))
    );
}

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    // canActivate: [() => isUnauthenticated()],
    loadChildren: () => import('./features/auth/auth.routes')
      .then(m => m.AUTH_ROUTES)
  },
  {
    path: '',
    // canActivate: [() => isAuthenticated()],
    loadChildren: () => import('./features/main/main.routes')
      .then(m => m.MAIN_ROUTES)
  },
  { path: '**', redirectTo: '/dashboard' }
];

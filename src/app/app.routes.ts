import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { inject } from '@angular/core';

const canActivate: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(AuthGuard).canActivate(route, state);
  };

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  // {
  //   path: '',
  //   canActivate: [() => isUnauthenticated()],
  //   loadChildren: () => import('./features/auth/auth.routes')
  //     .then(m => m.AUTH_ROUTES)
  // },
  {
    path: '',
    canActivate: [canActivate],
    canActivateChild: [canActivate],
    loadChildren: () => import('./features/main/main.routes')
      .then(m => m.MAIN_ROUTES)
  },
  { path: '**', redirectTo: '/dashboard' }
];

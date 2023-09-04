import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Routes } from '@angular/router';

import { AuthGuard } from './auth/guards';

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
  {
    path: '',
    canActivate: [canActivate],
    canActivateChild: [canActivate],
    loadChildren: () => import('./features/main/main.routes').then(m => m.MAIN_ROUTES)
  },
  { path: '**', redirectTo: '/dashboard' }
];

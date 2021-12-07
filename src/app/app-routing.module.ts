import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthorizedGuard } from './../shared/guards/unauthorized.guard';
import { AuthorizedGuard } from './../shared/guards/authorized.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./features/main/main.module').then(m => m.MainModule),
    canActivate: [AuthorizedGuard],
    canActivateChild: [AuthorizedGuard]
  },
  {
    path: '', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
    canActivate: [UnauthorizedGuard],
    canActivateChild: [UnauthorizedGuard]
  },
  { path: 'settings', loadChildren: () => import('./features/main/settings/settings.module').then(m => m.SettingsModule) },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

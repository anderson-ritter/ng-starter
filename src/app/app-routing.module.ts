import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthNotAllowedGuard } from './shared/services/auth-not-allowed';
import { AuthRequiredGuard } from './shared/services/auth-required-guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./features/main/main.module').then(m => m.MainModule),
    canActivate: [AuthRequiredGuard],
    canActivateChild: [AuthRequiredGuard]
  },
  {
    path: '', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule),
    canActivate: [AuthNotAllowedGuard],
    canActivateChild: [AuthNotAllowedGuard]
  },
  { path: 'settings', loadChildren: () => import('./features/main/settings/settings.module').then(m => m.SettingsModule) },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

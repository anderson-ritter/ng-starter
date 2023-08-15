import { Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { DashboardPageComponent } from './pages/dashaboard/dashboard-page/dashboard-page.component';
import { SettingsPageComponent } from './pages/settings/settings-page/settings-page.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    providers: [],
    children: [
      {
        path: 'dashboard',
        component: DashboardPageComponent,
        data: { title: 'ng-starter.dashboard.title', roles: ['Administrator'] }
      },
      {
        path: 'settings',
        component: SettingsPageComponent,
        data: { title: 'ng-starter.settings.title' }
      }
    ]
  }
];

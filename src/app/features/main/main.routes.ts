import { Routes } from '@angular/router';

import { MainComponent } from './main.component';
import { DashboardPageComponent } from './pages/dashaboard/dashboard-page/dashboard-page.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    providers: [],
    children: [
      {
        path: 'dashboard',
        component: DashboardPageComponent,
        data: { title: 'app.dashboard.title' }
      }
    ]
  }
];

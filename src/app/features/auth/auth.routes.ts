import { Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { SigninPageComponent } from './pages/signin/signin-page/signin-page.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthComponent,
    providers: [],
    children: [
      {
        path: 'signin',
        component: SigninPageComponent,
        data: { title: 'app.signin.title' }
      }
    ]
  }
];

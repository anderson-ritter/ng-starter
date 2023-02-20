import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninPageComponent } from './pages/signin-page/signin-page.component';


const routes: Routes = [
  {
    path: '',
    component: SigninPageComponent,
    data: { title: 'ng-starter.signin.title' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninRoutingModule { }

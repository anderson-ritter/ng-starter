import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninPageComponent } from './signin-page/signin-page.component';


const routes: Routes = [
  {
    path: '',
    component: SigninPageComponent,
    data: { title: 'ng-returns.signin.title' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninRoutingModule { }

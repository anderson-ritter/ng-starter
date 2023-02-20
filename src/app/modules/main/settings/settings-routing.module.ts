import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

const routes: Routes = [{
  path: '',
  component: SettingsPageComponent,
  data: { title: 'ng-starter.settings.title' }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }

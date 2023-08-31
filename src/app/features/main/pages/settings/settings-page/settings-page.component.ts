import { Component } from '@angular/core';

import { AuthModule } from './../../../../../auth';
import { SharedModule } from './../../../../../shared';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [
    AuthModule,
    SharedModule
  ],
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent {

}

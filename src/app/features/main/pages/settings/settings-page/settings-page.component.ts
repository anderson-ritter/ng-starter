import { Component } from '@angular/core';

import { SharedModule } from './../../../../../shared/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule],
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent {

}

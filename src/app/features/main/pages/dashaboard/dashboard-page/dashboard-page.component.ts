import { Component } from '@angular/core';

import { AuthModule } from './../../../../../auth';
import { SharedModule } from './../../../../../shared';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    AuthModule,
    SharedModule
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent { }

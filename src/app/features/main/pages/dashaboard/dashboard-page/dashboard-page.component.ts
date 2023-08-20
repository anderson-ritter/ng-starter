import { Component } from '@angular/core';

import { SharedModule } from './../../../../../shared/shared.module';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent { }

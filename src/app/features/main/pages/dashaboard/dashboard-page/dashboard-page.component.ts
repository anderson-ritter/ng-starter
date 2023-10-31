import { Component } from '@angular/core';

import { NgtwButtonModule } from './../../../../../@ngtw/components/button';
import { NgtwRippleModule } from './../../../../../@ngtw/components/ripple';
import { SharedModule } from './../../../../../shared/shared.module';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    SharedModule,
    NgtwButtonModule,
    NgtwRippleModule
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent { }

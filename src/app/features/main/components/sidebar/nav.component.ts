import { Component } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [SharedModule],
  host: { 'class': 'w-full' },
  template: `
    <ul class="flex flex-col gap-2">
      <ng-content select="app-nav-item"></ng-content>
    </ul>
  `
})
export class NavComponent { }

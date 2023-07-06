import { Component } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';

@Component({
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './auth.component.html'
})
export class AuthComponent { }

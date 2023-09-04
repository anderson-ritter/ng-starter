import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidebarComponent, SidebarNavigationItemComponent, SidebarNavigationComponent, SidebarNavigationItemIconDirective } from './components/sidebar';
import { BadgeComponent } from './components/badge';
import { SanitizeHtmlPipe } from './pipes';
import { SidebarService } from './services';

const COMPONENTS = [
  BadgeComponent,
  SidebarComponent,
  SidebarNavigationItemComponent,
  SidebarNavigationComponent
];

const SERVICES = [SidebarService];
const PIPES = [SanitizeHtmlPipe];
const DIRECTIVES=[SidebarNavigationItemIconDirective];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES
  ],
  exports: [
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES
  ],
  providers: [
    ...SERVICES
  ],
})
export class FlowbiteModule { }

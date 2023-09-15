import { Directive } from '@angular/core';

@Directive({
  selector: '[navigationItemIcon]',
  host: { 'class': 'text-cyan-600' }
})
export class SidebarNavigationItemIconDirective { }

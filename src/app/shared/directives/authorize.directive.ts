import { AfterViewInit, Directive, ElementRef, Inject, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

import { PermissionDirective } from './permission.directive';
import { USER_ROLES } from '../providers/user-roles.provider';

@Directive({
  selector: '[auhtorize]'
})
export class AuhtorizeDirective extends PermissionDirective implements AfterViewInit {
  private permissions: string[] = [];

  @Input()
  set auhtorize(permissions: string[]) {
    this.permissions = permissions;
  }

  constructor(
    elementRef: ElementRef,
    templateRef: TemplateRef<any>,
    viewContainerRef: ViewContainerRef,
    renderer: Renderer2,
    @Inject(USER_ROLES) public userRoles: string[]
  ) {
    super(elementRef, templateRef, viewContainerRef, renderer);
  }

  ngAfterViewInit(): void {
    this.updateView();
  }

  updateView(): void {
    if (this.checkPermission()) {
      this.showComponent();
    } else {
      this.hideComponent();
    }
  }

  checkPermission() {
    return this.permissions.some(permission => this.userRoles.includes(permission));
  }
}

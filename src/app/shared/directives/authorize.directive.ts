import { AfterViewInit, Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

import { PermissionDirective } from './permission.directive';

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
    private readonly keycloakService: KeycloakService
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
    const roles = [...this.keycloakService.getUserRoles()];
    return this.permissions.some(permission => roles.includes(permission));
  }
}

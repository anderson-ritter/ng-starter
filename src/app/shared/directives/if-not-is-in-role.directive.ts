import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  Input,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import { USER_ROLES } from '../providers/user-roles.provider';
import { PermissionDirective } from './permission.directive';

@Directive({
  selector: '[ifNotIsInRole]'
})
export class IfNotIsInRoleDirective extends PermissionDirective implements AfterViewInit {
  private roles: string[] = [];

  @Input()
  set ifNotIsInRole(roles: string[]) {
    this.roles = roles;
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
    return this.roles.every(permission => !this.userRoles.includes(permission));
  }

}

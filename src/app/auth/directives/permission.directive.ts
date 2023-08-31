import { ElementRef, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

export abstract class PermissionDirective {
  constructor(
    protected elementRef: ElementRef,
    protected templateRef: TemplateRef<any>,
    protected viewContainerRef: ViewContainerRef,
    protected renderer: Renderer2,
  ) { }

  protected hideComponent(): void {
    this.viewContainerRef.clear();
  }

  protected showComponent(): void {
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }

  protected disableComponent(): void {
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', true);
  }

  protected enableComponent(): void {
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', false);
  }
}

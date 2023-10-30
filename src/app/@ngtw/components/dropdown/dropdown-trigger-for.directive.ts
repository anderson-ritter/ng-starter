import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { Directive, ElementRef, Input, OnDestroy, ViewContainerRef } from '@angular/core';
import { merge, Observable, Subject, takeUntil } from 'rxjs';

import { DropdownPanel } from './dropdown-panel';

@Directive({
  selector: '[ngtw-dropdown-trigger-for], [ngtwDropdownTriggerFor]',
  exportAs: 'ngtwDropdownTriggerFor',
  host: {
    '[attr.aria-haspopup]': 'dropdownPanel ? "menu" : null',
    '[attr.aria-expanded]': 'dropdownPanel == null ? null : isOpen',
    '(click)': 'handleClick()'
  }
})
export class NgtwDropdownTriggerForDirective implements OnDestroy {

  /** Emits when the menu item is destroyed. */
  protected readonly destroyed = new Subject<void>();

  private isOpen = false;
  private overlayRef!: OverlayRef;

  @Input('ngtwDropdownTriggerFor') public dropdownPanel!: DropdownPanel;

  private get dropdownClosingActions(): Observable<MouseEvent | void> {
    const backdropClick$ = this.overlayRef.backdropClick();
    const detachment$ = this.overlayRef.detachments();
    const dropdownClosed = this.dropdownPanel.closed;

    return merge(backdropClick$, detachment$, dropdownClosed);
  }

  constructor(
    private overlay: Overlay,
    private elementRef: ElementRef<HTMLElement>,
    private viewContainerRef: ViewContainerRef
  ) { }

  handleClick(): void {
    this.isOpen ? this.destroy() : this.openDropdown();
  }

  openDropdown(): void {
    this.isOpen = true;

    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.close(),
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(this.elementRef)
        .withPositions([
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
            offsetY: 8
          }
        ])
    });

    const templatePortal = new TemplatePortal(
      this.dropdownPanel.templateRef,
      this.viewContainerRef
    );

    this.overlayRef.attach(templatePortal);

    this.dropdownClosingActions
      .pipe(takeUntil(this.destroyed))
      .subscribe(() => this.destroy());
  }

  private destroy(): void {
    if (!this.overlayRef || !this.isOpen) {
      return;
    }

    this.isOpen = false;
    this.overlayRef.detach();
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
    this.overlayRef?.dispose();
  }
}

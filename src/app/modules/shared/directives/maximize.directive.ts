import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import screenfull from 'screenfull';

@Directive({
  selector: "[maximize]",
  exportAs: "maximize" // <-- Make not of this here
})
export class MaximizeDirective {
  private isMaximizedSubject = new BehaviorSubject(false);

  isMaximized$ = this.isMaximizedSubject.pipe();

  constructor(
    private el: ElementRef,
    private renderer: Renderer2) { }

  toggle() {
    this.isMaximizedSubject?.getValue() ? this.minimize() : this.maximize();
  }

  maximize() {
    if (this.el) {
      this.isMaximizedSubject.next(true);
      this.renderer.addClass(this.el.nativeElement, "fullscreen");

      if (screenfull.isEnabled) {
        screenfull.request(this.el.nativeElement); // <-- request fullscreen mode
      }
    }
  }

  minimize() {
    if (this.el) {
      this.isMaximizedSubject.next(false);
      this.renderer.removeClass(this.el.nativeElement, "fullscreen");

      if (screenfull.isEnabled) {
        screenfull.exit(); // <-- exit fullscreen mode
      }
    }
  }
}

import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { map, scan, Subject } from 'rxjs';

@Injectable()
export class UiService {

  spin$: Subject<boolean> = new Subject();
  private spinnerRef: OverlayRef = this.cdkSpinnerCreate();

  constructor(private overlay: Overlay) {

    this.spin$
      .asObservable()
      .pipe(
        map(val => val ? 1 : -1),
        scan((acc, one) => (acc + one) >= 0 ? acc + one : 0, 0)
      )
      .subscribe((res) => {
        if (res === 1) { this.showSpinner() }
        else if (res == 0) {
          this.spinnerRef.hasAttached() ? this.stopSpinner() : null;
        }
      });
  }

  showSpinner() {
    // this.spinnerRef.attach(new ComponentPortal(MatProgressSpinner));
  }

  stopSpinner() {
    this.spinnerRef.detach();
  }

  private cdkSpinnerCreate() {
    return this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'app-backdrop',
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });
  }

}

import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Notification, NotificationType } from './../../shared/models/notification';

@Injectable({ providedIn: 'root' })
export class NotificationService {

  public subject = new Subject<Notification | undefined>();
  public keepAfterRouteChange = true;

  constructor(public router: Router) {
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          // clear alert messages
          this.clear();
        }
      }
    });
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  success(message: string, keepAfterRouteChange = false) {
    this.showNotification(NotificationType.success, message, keepAfterRouteChange);
  }

  error(message: string, keepAfterRouteChange = false) {
    this.showNotification(NotificationType.error, message, keepAfterRouteChange);
  }

  info(message: string, keepAfterRouteChange = false) {
    this.showNotification(NotificationType.info, message, keepAfterRouteChange);
  }

  warning(message: string, keepAfterRouteChange = false) {
    this.showNotification(NotificationType.warning, message, keepAfterRouteChange);
  }

  showNotification(type: NotificationType, message: string, keepAfterRouteChange = false, timeout: number = 4000) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    const notification: Notification = { type, message, timeout }
    this.subject.next(notification);
  }

  clear() {
    this.subject.next(undefined);
  }
}

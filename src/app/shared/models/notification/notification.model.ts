export class Notification {
  constructor(
    public type: NotificationType,
    public message: string,
    public timeout: number = 4000
  ) { }
}

export enum NotificationType {
  success,
  error,
  info,
  warning
}

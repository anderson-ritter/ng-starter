import {
  HttpTransportType,
  HubConnection,
  HubConnectionBuilder,
  IHttpConnectionOptions,
  LogLevel
} from '@microsoft/signalr';
import { Observable } from 'rxjs';

export enum HubConnectionStatus {
  connected,
  connecting,
  closed,
  error
}

export abstract class SignalRService {

  private connection?: HubConnection;
  private connectionStatus = HubConnectionStatus.closed;

  protected abstract get hubUrl(): string;

  constructor() { }

  protected abstract getAuthorizationHeaderValue(): string | Promise<string>;

  private creteConnection(): HubConnection {

    const options: IHttpConnectionOptions = {
      accessTokenFactory: () => this.getAuthorizationHeaderValue()
    };

    const hub = new HubConnectionBuilder()
      .withUrl(this.hubUrl, options)
      .configureLogging(LogLevel.Information)
      .withAutomaticReconnect()
      .build();

    return hub;
  }

  private connect(): Promise<HubConnection | undefined> {

    return new Promise((resolve, reject) => {

      const checkConnecting = () => {
        if (this.connectionStatus === HubConnectionStatus.connecting) {
          window.setTimeout(checkConnecting, 100);

        } else {
          if (this.connectionStatus !== HubConnectionStatus.connected) {
            this.connectionStatus = HubConnectionStatus.connecting;
            this.connection = this.creteConnection();

            this.connection.start()
              .then(() => {
                this.connectionStatus = HubConnectionStatus.connected;
                resolve(this.connection);
              })
              .catch((err) => {
                this.connectionStatus = HubConnectionStatus.error;
                reject(err);
              });

            this.connection.onclose((error) => {
              this.connectionStatus = HubConnectionStatus.closed;
            });

          } else {
            resolve(this.connection);
          }
        }
      };

      checkConnecting();
    });
  }

  disconnect(): void {

    if (this.connectionStatus === HubConnectionStatus.connected) {
      this.connection?.stop()
        .then(() => {
          this.connectionStatus = HubConnectionStatus.closed;
        })
        .catch(err => {
          this.connectionStatus = HubConnectionStatus.error;
        });
    }

  }

  protected listen<T>(event: string, handler: (...args: any[]) => T): Observable<T> {
    return new Observable<T>(observer => {
      this.connect()
        .then(() => {
          this.connection?.on(event, (...args: any[]) => {
            observer.next(handler(...args));
          });
        });
    });
  }
}

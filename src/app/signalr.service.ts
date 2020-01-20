import { Injectable, EventEmitter } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { environment } from 'src/environments/environment';

@Injectable()
export class SignalRSrv {

  private hubConnection: HubConnection | undefined;
  public Notification: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  public initialize(): void {
    this.stopConnection();

    this.hubConnection = new signalR.HubConnectionBuilder()
    .configureLogging(signalR.LogLevel.Debug)
    .withUrl(environment.apiUrl + '/hubs/notification', {
      accessTokenFactory: () => JSON.parse(localStorage.getItem('token')).token,
      transport: signalR.HttpTransportType.WebSockets
    })
    .build();

    this.hubConnection.on('Notification', (data: any) => {
      this.Notification.emit(data);
    });

    this.hubConnection.start().then(() => {
      console.log('Now connected');
    }).catch((error: any) => {
      console.log('Could not connect ' + error);
      setTimeout(() => this.initialize(), 3000);
    });
  }

  stopConnection() {
    if (this.hubConnection) {
      this.hubConnection.stop();
      this.hubConnection = null;
    }
  };
}
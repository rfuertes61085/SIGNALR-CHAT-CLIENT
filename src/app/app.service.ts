import { Injectable, EventEmitter } from '@angular/core';

import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { AuthService } from './auth.service';

@Injectable()
export class SignalRNotificationService {

  private hubConnection: HubConnection | undefined;
  public Notification: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  public initialize(): void {
    this.stopConnection();

    this.hubConnection = new signalR.HubConnectionBuilder()
    .configureLogging(signalR.LogLevel.Debug)
    .withUrl("http://localhost:5000/hubs/notification", {
      accessTokenFactory: () => "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJqb2huIiwibmJmIjoxNTc5MjU2NDUyLCJleHAiOjE1NzkzNDI4NTIsImlhdCI6MTU3OTI1NjQ1Mn0.BPCEAGnu4fKZF-CTv602m-OY9WCFTkZaPLf67hNEZr5nSuhGc3hDh_uwlcuaNQCw-qK2I_SG0_GRHWdOn35iUQ",
      transport: signalR.HttpTransportType.WebSockets
    })
    .build();

    this.hubConnection.on("Notification", (data: any) => {
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
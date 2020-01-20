import { Component } from '@angular/core';
import { SignalRNotificationService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private signalRSrv: SignalRNotificationService) { }

  public ngOnInit() {
    this.signalRSrv.initialize();
    this.signalRSrv.Notification.subscribe(data => {
      // do some sort of notification!
      console.log(data); // <-- This will be the message that has come from your NotificationHub!
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ChatSrv } from 'src/app/chat.service';
import { SignalRSrv } from 'src/app/signalr.service';
import { IChatMessage } from '../chat.model';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})

export class ChatboxComponent implements OnInit {
  public chatMessages: any[] = [];
  public input: string;
  constructor(private chatSrv: ChatSrv, private signalRSrv: SignalRSrv) { }

  ngOnInit() {
    this.signalRSrv.initialize();
    this.signalRSrv.Notification.subscribe(rtm => {
      if (rtm)
        this.chatMessages.push(rtm);
    });

    this.chatSrv.get('hub/messages')
      .pipe(tap((msgs) => this.chatMessages.push(...msgs)))
      .subscribe()
  }

  public onEnter(): void {
    const chatMessage: IChatMessage = {
      message: this.input
    }
    this.chatSrv.post(chatMessage, 'hub/send').subscribe(() => this.input = '');
  }

  public isOwner(guid: number): boolean {
    return JSON.parse(localStorage.getItem('token')).guid == guid ? true : false;
  }
}
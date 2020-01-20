import { Component, OnInit, Input } from '@angular/core';
import { IChatMessage } from '../../chat.model';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss']
})

export class UserChatComponent implements OnInit {
  @Input()
  public chat: IChatMessage;
  constructor() { }

  ngOnInit() { }
}
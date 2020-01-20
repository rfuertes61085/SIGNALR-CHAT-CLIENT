import { Component, OnInit, Input } from '@angular/core';
import { IChatMessage } from '../../chat.model';

@Component({
  selector: 'app-reply-chat',
  templateUrl: './reply-chat.component.html',
  styleUrls: ['./reply-chat.component.scss']
})

export class ReplyChatComponent implements OnInit {
  @Input()
  public chat: IChatMessage;
  constructor() { }

  ngOnInit() { }
}
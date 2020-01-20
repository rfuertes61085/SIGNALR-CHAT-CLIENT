import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss']
})

export class UserChatComponent implements OnInit {
  @Input()
  public text: string;
  constructor() { }

  ngOnInit() { }
}
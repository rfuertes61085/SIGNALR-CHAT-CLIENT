import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reply-chat',
  templateUrl: './reply-chat.component.html',
  styleUrls: ['./reply-chat.component.scss']
})

export class ReplyChatComponent implements OnInit {
  @Input()
  public text: string;
  constructor() { }

  ngOnInit() { }
}
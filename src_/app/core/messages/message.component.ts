import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
  selector: 'messages',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  messages: Message[];

  constructor(private messageService: MessageService) {
    this.messages = [];
  }

  ngOnInit() {
    this.messageService.stream().subscribe(
      message => {
        if (message === null) {
          this.messages = [];
        } else {
          this.messages.push(message);
        }
      }
    );
  }

}

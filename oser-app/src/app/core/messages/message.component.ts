import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'messages',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  message: string;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.getMessage().subscribe(
      message => this.message = message
    );
  }

}

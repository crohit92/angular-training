import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../core/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  providers: [MessagesService]
})
export class MessagesComponent implements OnInit {

  messagesService: MessagesService;
  constructor(messagesService: MessagesService) {
    this.messagesService = messagesService;
  }

  ngOnInit(): void {
  }

}

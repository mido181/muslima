import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-messages-room',
  imports: [MatIcon, MatTooltip,RouterLink],
  templateUrl: './messages-room.component.html',
  styleUrl: './messages-room.component.scss',
})
export class MessagesRoomComponent {

  messages:string[] = []

  addMessage(message: string) {
    this.messages.push(message);
  }

}

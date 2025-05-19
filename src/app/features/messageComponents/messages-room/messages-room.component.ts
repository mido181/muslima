import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-messages-room',
  imports: [MatIcon, MatTooltip],
  templateUrl: './messages-room.component.html',
  styleUrl: './messages-room.component.scss',
})
export class MessagesRoomComponent {}

import { Component, inject, OnInit } from '@angular/core';
import { MessagesContanierComponent } from './messages-contanier/messages-contanier.component';
import { AdsComponent } from '../../shared/ads/ads.component';
import { MessageNavbarComponent } from './message-navbar/message-navbar.component';
import { SubHeaderComponent } from '../../core/sub-header/sub-header.component';
import { SubHeaderService } from '../../services/sub-header.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MessagesRoomComponent } from './messages-room/messages-room.component';

@Component({
  selector: 'app-message',
  imports: [
    MessageNavbarComponent,
    MessagesContanierComponent,
    AdsComponent,
    MessageNavbarComponent,
    SubHeaderComponent,
    RouterLink,
    RouterLinkActive,
    MessagesRoomComponent,
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent implements OnInit {
  private subHeaderService = inject(SubHeaderService);

  ngOnInit() {
    this.subHeaderService.headerStatus$.next(false);
  }
}

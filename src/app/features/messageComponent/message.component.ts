import { Component, inject, OnInit } from '@angular/core';
import { MessagesContanierComponent } from './messages-contanier/messages-contanier.component';
import { AdsComponent } from '../../shared/ads/ads.component';
import { MessageNavbarComponent } from './message-navbar/message-navbar.component';
import { SubHeaderComponent } from '../../core/sub-header/sub-header.component';
import { SubHeaderService } from '../../services/sub-header.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MessagesRoomComponent } from './messages-room/messages-room.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-message',
  imports: [
    MessageNavbarComponent,
    MessagesContanierComponent,
    AdsComponent,
    MessageNavbarComponent,
    SubHeaderComponent,
    NgClass,
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent implements OnInit {
  private subHeaderService = inject(SubHeaderService);
  fakeData = [
    { name: 'لم-تقراء', eng: 'notRead' },
    { name: 'المفضلات', eng: 'favor' },
    { name: 'الجميع', eng: 'All' },
  ];
idn:number = 0 ;
  id(num: number) {
   this.idn = num
  }

  ngOnInit() {
    this.subHeaderService.headerStatus$.next(false);
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { MessagesContanierComponent } from './messages-contanier/messages-contanier.component';
import { AdsComponent } from '../../shared/ads/ads.component';
import { MessageNavbarComponent } from './message-navbar/message-navbar.component';
import { SubHeaderService } from '../../services/sub-header.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SubHeaderComponent } from '../../shared/sub-header/sub-header.component';

@Component({
  selector: 'app-message',
  imports: [
    MessageNavbarComponent,
    MessagesContanierComponent,
    MessageNavbarComponent,
    AdsComponent,
    SubHeaderComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent implements OnInit {
  private subHeaderService = inject(SubHeaderService);
  fakeData = [
    { name: 'الجميع', routerName: '/messages' },
    { name: 'لم تقراء', routerName: 'notRead' },
    { name: 'المفضلات', routerName: 'favorite' },
  ];

  ngOnInit() {
    this.subHeaderService.headerStatus$.next(false);
  }
}

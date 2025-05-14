import { Component } from '@angular/core';
import { MessageNavbarComponent } from '../message-navbar/message-navbar.component';
import { MessagesContanierComponent } from '../messages-contanier/messages-contanier.component';

@Component({
  selector: 'app-all-msgs',
  imports: [MessagesContanierComponent, MessageNavbarComponent],
  templateUrl: './all-msgs.component.html',
  styleUrl: './all-msgs.component.scss',
})
export class AllMsgsComponent {}

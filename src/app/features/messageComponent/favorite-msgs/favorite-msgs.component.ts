import { Component } from '@angular/core';
import { MessageNavbarComponent } from '../message-navbar/message-navbar.component';
import { MessagesContanierComponent } from '../messages-contanier/messages-contanier.component';

@Component({
  selector: 'app-favorite-msgs',
  imports: [    MessagesContanierComponent,
      MessageNavbarComponent],
  templateUrl: './favorite-msgs.component.html',
  styleUrl: './favorite-msgs.component.scss'
})
export class FavoriteMsgsComponent {

}

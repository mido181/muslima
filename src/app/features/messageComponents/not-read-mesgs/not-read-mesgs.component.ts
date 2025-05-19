import { Component } from '@angular/core';
import { MessagesContanierComponent } from '../messages-contanier/messages-contanier.component';
import { MessageNavbarComponent } from '../message-navbar/message-navbar.component';

@Component({
  selector: 'app-not-read-mesgs',
  imports: [
    MessagesContanierComponent,
    MessageNavbarComponent

  ],
  templateUrl: './not-read-mesgs.component.html',
  styleUrl: './not-read-mesgs.component.scss'
})
export class NotReadMesgsComponent {

}

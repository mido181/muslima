import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { UserStatusComponent } from "../../../shared/user-status/user-status.component";

@Component({
  selector: 'app-messages-contanier',
  imports: [MatIcon, RouterLink, UserStatusComponent],
  templateUrl: './messages-contanier.component.html',
  styleUrl: './messages-contanier.component.scss'
})
export class MessagesContanierComponent {

}

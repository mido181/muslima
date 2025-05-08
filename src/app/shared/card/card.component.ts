import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { UserStatusComponent } from "../user-status/user-status.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [MatIcon, UserStatusComponent,RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}

import {
  Component,
  Input,
  input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CardComponent } from '../card/card.component';
interface Iuser {
  name: string;
  email: string;
  country: string;
  gender: string;
  city: string;
  height: number;
  weight: number;
  profilePicture: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  isOnline: boolean;
  hideAge: boolean;
  hideLastSeen: boolean;
  lastSeen: Date;
}
@Component({
  selector: 'app-card-contanier',
  imports: [CardComponent],
  templateUrl: './card-contanier.component.html',
  styleUrl: './card-contanier.component.scss',
})
export class CardContanierComponent {
  
}

import { Component, Input, input } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-contanier',
  imports: [CardComponent],
  templateUrl: './card-contanier.component.html',
  styleUrl: './card-contanier.component.scss',
})
export class CardContanierComponent {
  @Input() Quntity: number = Math.floor(Math.random() * 12);

  cardQuntity() {
    let qunt = Array.from(this.Quntity.toString().repeat(3));
    return qunt;
  }
}

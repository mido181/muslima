import { Component, Input, input } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-card-contanier',
  imports: [CardComponent],
  templateUrl: './card-contanier.component.html',
  styleUrl: './card-contanier.component.scss'
})
export class CardContanierComponent {

  @Input() Quntity:number = 10;

  cardQuntity(){
    let qunt = Array.from(this.Quntity.toString().repeat(10))
    return qunt
  }
}

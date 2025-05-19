import { Component } from '@angular/core';
import { CardContanierComponent } from "../../../shared/card-contanier/card-contanier.component";
import { AdsComponent } from "../../../shared/ads/ads.component";

@Component({
  selector: 'app-matches-fit',
  imports: [CardContanierComponent, AdsComponent],
  templateUrl: './matches-fit.component.html',
  styleUrl: './matches-fit.component.scss'
})
export class MatchesFitComponent {

}

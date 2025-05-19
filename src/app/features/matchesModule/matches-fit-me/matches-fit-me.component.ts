import { Component } from '@angular/core';
import { CardContanierComponent } from "../../../shared/card-contanier/card-contanier.component";
import { AdsComponent } from "../../../shared/ads/ads.component";

@Component({
  selector: 'app-matches-fit-me',
  imports: [CardContanierComponent, AdsComponent],
  templateUrl: './matches-fit-me.component.html',
  styleUrl: './matches-fit-me.component.scss'
})
export class MatchesFitMeComponent {

}

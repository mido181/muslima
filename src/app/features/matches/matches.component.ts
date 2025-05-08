import { Component } from '@angular/core';
import { SubHeaderComponent } from "../../core/sub-header/sub-header.component";
import { OrderbyComponent } from "../../shared/orderby/orderby.component";
import { CardContanierComponent } from "../../shared/card-contanier/card-contanier.component";
import { AdsComponent } from "../../shared/ads/ads.component";

@Component({
  selector: 'app-matches',
  imports: [SubHeaderComponent, OrderbyComponent, CardContanierComponent, AdsComponent],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss'
})
export class MatchesComponent {

}

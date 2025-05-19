import { Component } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { CardContanierComponent } from "../../shared/card-contanier/card-contanier.component";
import { EmptyContentComponent } from "../../shared/empty-content/empty-content.component";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-blocked',
  imports: [MatIcon, CardContanierComponent, EmptyContentComponent],
  templateUrl: './blocked.component.html',
  styleUrl: './blocked.component.scss'
})
export class BlockedComponent {

}

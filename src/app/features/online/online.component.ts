import { Component } from '@angular/core';
import { SubHeaderComponent } from '../../core/sub-header/sub-header.component';
import { CardContanierComponent } from '../../shared/card-contanier/card-contanier.component';
import { OrderbyComponent } from '../../shared/orderby/orderby.component';

@Component({
  selector: 'app-online',
  imports: [SubHeaderComponent, CardContanierComponent, OrderbyComponent],
  templateUrl: './online.component.html',
  styleUrl: './online.component.scss',
})
export class OnlineComponent {}

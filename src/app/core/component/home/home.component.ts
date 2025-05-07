import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SubHeaderComponent } from '../../sub-header/sub-header.component';
import { BorderCircleComponent } from '../../../shared/border-circle/border-circle.component';
import { CardComponent } from '../../../shared/card/card.component';
import { CardContanierComponent } from "../../../shared/card-contanier/card-contanier.component";
import { OrderbyComponent } from "../../../shared/orderby/orderby.component";

@Component({
  selector: 'app-home',
  imports: [
    MatIcon,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    BorderCircleComponent,
    SubHeaderComponent,
    CardContanierComponent,
    OrderbyComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

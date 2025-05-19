import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { BorderCircleComponent } from '../../../shared/border-circle/border-circle.component';
import { CardContanierComponent } from '../../../shared/card-contanier/card-contanier.component';
import { OrderbyComponent } from '../../../shared/orderby/orderby.component';
import { AdsComponent } from '../../../shared/ads/ads.component';
import { RouterLink } from '@angular/router';
import { ToasterComponent } from '../../../shared/toaster/toaster.component';
import { MatTooltip } from '@angular/material/tooltip';
import { SubHeaderComponent } from '../../../shared/sub-header/sub-header.component';
import { PaginationComponent } from '../../../shared/pagination/pagination.component';

@Component({
  selector: 'app-home',
  imports: [
    MatIcon,
    BorderCircleComponent,
    SubHeaderComponent,
    CardContanierComponent,
    OrderbyComponent,
    AdsComponent,
    RouterLink,
    ToasterComponent,
    MatTooltip,
    PaginationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  icons = [
    { name: 'chat_bubble', tooltipName: 'عدد الرسائل' },

    { name: 'favorite', tooltipName: 'المعجبين' },

    { name: 'star', tooltipName: 'المفضلين' },

    { name: 'visibility ', tooltipName: 'شاهد ملفي الشخصي' },
  ];
}

import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SubHeaderComponent } from '../../sub-header/sub-header.component';
import { BorderCircleComponent } from '../../../shared/border-circle/border-circle.component';
import { CardComponent } from '../../../shared/card/card.component';
import { CardContanierComponent } from '../../../shared/card-contanier/card-contanier.component';
import { OrderbyComponent } from '../../../shared/orderby/orderby.component';
import { AdsComponent } from '../../../shared/ads/ads.component';
import { ProfileComponent } from '../../../features/profile/profile.component';
import { RouterLink } from '@angular/router';
import { ToasterComponent } from '../../../shared/toaster/toaster.component';
import { MatTooltip } from '@angular/material/tooltip';

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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  icons = [
    
   {name:'chat_bubble' ,tooltipName:'عدد الرسائل'}, 
    
   {name:'favorite' ,tooltipName:'المعجبين'},
    
   {name:'star' ,tooltipName:'المفضلين'},
    
   {name:'visibility ',tooltipName:'شاهد ملفي الشخصي'},
  ];
}

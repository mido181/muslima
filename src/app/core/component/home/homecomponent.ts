import { Component, inject, OnInit } from '@angular/core';
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
import { Select } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { UserCategoryService } from '../../../services/user-category.service';
import { CardComponent } from "../../../shared/card/card.component";
import { Iuser } from '../../../interfaces/user.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    SubHeaderComponent,
    OrderbyComponent,
    RouterLink,
    PaginationComponent,
    Select,
    CardComponent,
    JsonPipe
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private userCategory = inject(UserCategoryService);
 users:Iuser[] =[] 
  ngOnInit() {
   this.allUsers() 
  }

allUsers() {
  this.userCategory.allUser.subscribe(res => this.users = res);
}
  userName: string = 'Mohamed';
  selected = '';
  filter = [
    { name: 'الاونلاين' },
    { name: 'الاقدم' },
    { name: 'الاحدث' },
    { name: 'اصحاب العضويات المدفوعة' },
  ];
  icons = [
    { name: 'chat_bubble', tooltipName: 'عدد الرسائل' },

    { name: 'favorite', tooltipName: 'المعجبين' },

    { name: 'star', tooltipName: 'المفضلين' },

    { name: 'visibility ', tooltipName: 'شاهد ملفي الشخصي' },
  ];
  selectedVal(val: string) {
    console.log(val);
  }
}

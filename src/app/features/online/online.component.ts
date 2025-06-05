import { Component, inject, OnInit } from '@angular/core';
import { CardContanierComponent } from '../../shared/card-contanier/card-contanier.component';
import { OrderbyComponent } from '../../shared/orderby/orderby.component';
import { SubHeaderService } from '../../services/sub-header.service';
import { SubHeaderComponent } from '../../shared/sub-header/sub-header.component';
import { UserCategoryService } from '../../services/user-category.service';
import { CardComponent } from '../../shared/card/card.component';
import { Iuser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-online',
  imports: [SubHeaderComponent, OrderbyComponent, CardComponent],
  templateUrl: './online.component.html',
  styleUrl: './online.component.scss',
})
export class OnlineComponent implements OnInit {
  private userCategory = inject(UserCategoryService);
  users: Iuser[] = [];
  ngOnInit() {
    this.onlineUsers();
  }

  onlineUsers() {
    this.userCategory.allActive.subscribe((res) => (this.users = res.users));
  }
}

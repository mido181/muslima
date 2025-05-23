import { Component, inject, OnInit } from '@angular/core';
import { CardContanierComponent } from '../../shared/card-contanier/card-contanier.component';
import { OrderbyComponent } from '../../shared/orderby/orderby.component';
import { SubHeaderService } from '../../services/sub-header.service';
import { SubHeaderComponent } from '../../shared/sub-header/sub-header.component';

@Component({
  selector: 'app-online',
  imports: [SubHeaderComponent, CardContanierComponent, OrderbyComponent],
  templateUrl: './online.component.html',
  styleUrl: './online.component.scss',
})
export class OnlineComponent implements OnInit {
  private subHeaderService = inject(SubHeaderService);

  ngOnInit() {
    this.subHeaderService.headerStatus$.next(true);
  }
}

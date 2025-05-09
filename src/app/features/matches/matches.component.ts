import { Component, inject, OnInit } from '@angular/core';
import { SubHeaderComponent } from '../../core/sub-header/sub-header.component';
import { OrderbyComponent } from '../../shared/orderby/orderby.component';
import { CardContanierComponent } from '../../shared/card-contanier/card-contanier.component';
import { AdsComponent } from '../../shared/ads/ads.component';
import { ActivatedRoute, Router, RouterEvent, RouterLink } from '@angular/router';
import { SubHeaderService } from '../../services/sub-header.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-matches',
  imports: [
    SubHeaderComponent,
    OrderbyComponent,
    CardContanierComponent,
    AdsComponent,
    RouterLink,
    MatIcon
  ],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss',
})
export class MatchesComponent implements OnInit {
  private router = inject(ActivatedRoute);
  private subHeaderService = inject(SubHeaderService);

  ngOnInit() {
    this.subHeaderService.headerStatus$.next(false)
  }
}

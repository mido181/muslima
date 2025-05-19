import { Component, inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { SubHeaderComponent } from '../../../shared/sub-header/sub-header.component';
import { OrderbyComponent } from '../../../shared/orderby/orderby.component';
import { SubHeaderService } from '../../../services/sub-header.service';

@Component({
  selector: 'app-matches',
  imports: [
    SubHeaderComponent,
    OrderbyComponent,
    RouterLink,
    MatIcon,
    RouterOutlet,
    RouterLinkActive,
  ],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss',
})
export class MatchesComponent implements OnInit {
  matchesList = [
    { name: 'الاعضاء المناسبون', iconName: '', routeName: '/matches' },
    {
      name: 'الاعضاء اللائقين المتبادلة',
      iconName: 'locked',
      routeName: 'fiteBoth',
    },
  ];

  private router = inject(ActivatedRoute);
  private subHeaderService = inject(SubHeaderService);

  ngOnInit() {
    this.subHeaderService.headerStatus$.next(false);
  }
}

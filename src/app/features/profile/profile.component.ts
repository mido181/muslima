import { Component, inject, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { UserStatusComponent } from '../../shared/user-status/user-status.component';
import { OrderbyComponent } from '../../shared/orderby/orderby.component';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  RouterLink,
} from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [MatIcon, UserStatusComponent, OrderbyComponent, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  private router = inject(ActivatedRoute);

  ngOnInit() {
    this.router.params.subscribe((res) => console.log(res['id']));
  }
}

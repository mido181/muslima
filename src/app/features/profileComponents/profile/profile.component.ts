import { Component, inject, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  ActivatedRoute,
  RouterLink,
} from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';
import { ToasterService } from '../../../services/toaster.service';
import { OrderbyComponent } from '../../../shared/orderby/orderby.component';
import { UserStatusComponent } from '../../../shared/user-status/user-status.component';

@Component({
  selector: 'app-profile',
  imports: [MatIcon, MatTooltip,UserStatusComponent, OrderbyComponent, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  private router = inject(ActivatedRoute);
  private toasterService = inject(ToasterService);

  ngOnInit() {
    this.router.params.subscribe((res) => console.log(res['id']));
  }

successToaster(message: string) {  
  this.toasterService.successToaster(message);
}

}

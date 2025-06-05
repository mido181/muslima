import { Component, inject, model, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';
import { ToasterService } from '../../../services/toaster.service';
import { OrderbyComponent } from '../../../shared/orderby/orderby.component';
import { UserStatusComponent } from '../../../shared/user-status/user-status.component';
import { GalleriaModule } from 'primeng/galleria';
import { UserCategoryService } from '../../../services/user-category.service';
import { Iuser } from '../../../interfaces/user.interface';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { UserResponseService } from '../../../services/user-response.service';

@Component({
  selector: 'app-profile',
  imports: [MatIcon, GalleriaModule, MatTooltip, OrderbyComponent, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  private UserService = inject(UserCategoryService);
  private UserRes = inject(UserResponseService);
  private router = inject(ActivatedRoute);
  private toasterService = inject(ToasterService);
  images = model<string[]>([]);
  user?: Iuser | null ;
  ngOnInit() {
    this.router.params.subscribe((res) => {
      this.userById(res['id']);
    });
 
    this.images.set([
      'https://placehold.co/300x300.png',
      'https://placehold.co/300x300.png',
      'https://placehold.co/300x300.png',
      'https://placehold.co/300x300.png',
    ]);
  }

  userById(id: string) {
    this.UserService.userById(id).subscribe((res) => {
      this.UserRes.userResponse.subscribe((res) => {    });
    });
  }

  successToaster(message: string) {
    this.toasterService.successToaster(message);
  }

  responsiveOptions: any[] = [
    {
      breakpoint: '1300px',
      numVisible: 4,
    },
    {
      breakpoint: '575px',
      numVisible: 2,
    },
  ];
}

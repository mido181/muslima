import { Component, inject, model, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';
import { ToasterService } from '../../../services/toaster.service';
import { OrderbyComponent } from '../../../shared/orderby/orderby.component';
import { UserStatusComponent } from '../../../shared/user-status/user-status.component';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-profile',
  imports: [
    MatIcon,
    GalleriaModule,
    MatTooltip,
    UserStatusComponent,
    OrderbyComponent,
    RouterLink,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',

})
export class ProfileComponent implements OnInit {
  private router = inject(ActivatedRoute);
  private toasterService = inject(ToasterService);
  images = model<string[]>([]);

  ngOnInit() {
    this.router.params.subscribe((res) => console.log(res['id']));
    this.images.set(['https://placehold.co/300x300.png', 'https://placehold.co/300x300.png', 'https://placehold.co/300x300.png', 'https://placehold.co/300x300.png']);
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
      numVisible: 1,
    },
  ];
}

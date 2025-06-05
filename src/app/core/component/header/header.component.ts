import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DropdownComponent } from '../../../shared/dropdown/dropdown.component';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadge } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderNavComponent } from '../header-nav/header-nav.component';
import { AuthService } from '../../../services/auth/auth.service';
import { UserResponseService } from '../../../services/user-response.service';
import { Iuser } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-header',
  imports: [
    MatIcon,
    DropdownComponent,
    RouterLink,
    MatMenuModule,
    MatSidenavModule,
    HeaderNavComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  items: { name: string; routeName?: string }[] = []
  ngOnInit(): void {

    
    this.userRes.userResponse.subscribe(res => {
      if (res && !Array.isArray(res)) {
              this.user = res;
    this.items = [
      { name: 'تعديل الملف الشخصي', routeName: '/profile-mangement/'+res._id},
      { name: 'ترقية الحساب', routeName: '/pricePlan'},
      { name: 'تسحيل الخروج' },
      { name: 'حذف حسابي' },
        ];
            } else {
        this.user = {} as Iuser; // or handle null/array case as needed
      }
    })
  }
  userRes = inject(UserResponseService);
  user!:Iuser
  authService = inject(AuthService)
  @Output() isOpen: EventEmitter<boolean> = new EventEmitter();
  open: boolean = false;
  

  sideBar() {
    this.open = !this.open;

    this.isOpen.emit(this.open);
  }


  logout(){
    this.authService.logout.subscribe()
  }
}

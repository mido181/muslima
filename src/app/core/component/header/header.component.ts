import { Component, EventEmitter, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DropdownComponent } from '../../../shared/dropdown/dropdown.component';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadge } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderNavComponent } from '../header-nav/header-nav.component';

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
export class HeaderComponent {
  @Output() isOpen: EventEmitter<boolean> = new EventEmitter();
  open: boolean = false;
  items = [
    { name: 'تعديل الملف الشخصي', routeName: '/profile-mangement'},
    { name: 'ترقية الحساب', routeName: '/pricePlan'},
    { name: 'تسحيل الخروج' },
    { name: 'حذف حسابي' },
      ];

  sideBar() {
    this.open = !this.open;

    this.isOpen.emit(this.open);
  }
}

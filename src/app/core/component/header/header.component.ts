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
    'تعديل الملف الشخصي',
    'المفضلات',
    'تعديل الملف الشخصي',
    'قائمة الحظر',
    'تعديل الملف الشخصي',
    'من شاهد الملف الشخصي',
  ];

  sideBar() {
    this.open = !this.open;

    this.isOpen.emit(this.open);
  }
}

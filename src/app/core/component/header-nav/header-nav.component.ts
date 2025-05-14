import { Component } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DropdownComponent } from "../../../shared/dropdown/dropdown.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  imports: [MatMenuModule, MatBadge, MatSidenavModule, DropdownComponent,RouterLink],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss',
})
export class HeaderNavComponent {
  items = [
    'تعديل الملف الشخصي',
    'المفضلات',
    'تعديل الملف الشخصي',
    'قائمة الحظر',
    'تعديل الملف الشخصي',
    'من شاهد الملف الشخصي',
  ];
}

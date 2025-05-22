import { Component } from '@angular/core';
import { SubHeaderComponent } from '../../../shared/sub-header/sub-header.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-profile-mangement',
  imports: [SubHeaderComponent,RouterOutlet,RouterLink, RouterLinkActive, MatIcon],
  templateUrl: './profile-mangement.component.html',
  styleUrl: './profile-mangement.component.scss',
})
export class ProfileMangementComponent {
  profileMangment = [
    {
      name: ' تعديل الملف الشخصي',
      routeName: '/profile-mangement',
      iconName: '',
    },
    { name: 'الصور', routeName: 'images', iconName: '' },
    {
      name: 'أهتماتي ',
      routeName: 'interest',
      iconName: '',
    },
  ];
}

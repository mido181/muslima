import { Component, inject, OnInit } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DropdownComponent } from '../../../shared/dropdown/dropdown.component';
import { RouterLink } from '@angular/router';
import { SubHeaderService } from '../../../services/sub-header.service';
import { SelectedActivitiesService } from '../../../services/selected-activities.service';

@Component({
  selector: 'app-header-nav',
  imports: [
    MatMenuModule,
    MatBadge,
    MatSidenavModule,
    DropdownComponent,
    RouterLink,
  ],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss',
})
export class HeaderNavComponent implements OnInit {
  private subHeaderService = inject(SubHeaderService);

  ngOnInit(): void {
    this.subHeaderService.headerStatus$.next(false);
  }

  activites = [];
  activitesList = [
    { name: 'الأعجابات', routerName: '/interest' },
    { name: 'المفضلات', routerName: '/favorite' },
    { name: 'قائمة الحظر', routerName: '/blockList' },
    { name: 'من شاهد الملف الشخصي', routerName: '/viewedProfile' },
  ];

  private activitiesServices = inject(SelectedActivitiesService);

  changeActivties(name: 'interest' | 'favorite') {
    console.log('changeActivties', name);

    this.activitiesServices.activitiesSelected$.next(name);
  }

  items = [
    'تعديل الملف الشخصي',
    'المفضلات',
    'تعديل الملف الشخصي',
    'قائمة الحظر',
    'تعديل الملف الشخصي',
    'من شاهد الملف الشخصي',
  ];
}

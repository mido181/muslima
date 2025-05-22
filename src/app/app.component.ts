import { NgFor } from '@angular/common';
import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
  viewChild,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/component/header/header.component';
import { FooterComponent } from './core/component/footer/footer.component';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatBadge } from '@angular/material/badge';
import { SelectedActivitiesService } from './services/selected-activities.service';
import { Toast } from 'primeng/toast';
import { LoginService } from './services/auth/login.service';
import { ToasterService } from './services/toaster.service';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MatSidenavModule,
    RouterLink,
    MatBadge,
    Toast,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'new app';
  private activitiesServices = inject(SelectedActivitiesService);
  private loginSerivce = inject(LoginService);
  private toasterService = inject(ToasterService);

  ngOnInit(): void {}

  changeActivties(name: 'interest' | 'favorite') {
    this.activitiesServices.activitiesSelected$.next(name);
  }

  @ViewChild('drawer')
  drawer!: MatDrawer;

  closeDrawer() {
    this.drawer.close();
  }

  logout() {
    this.loginSerivce.logout();
    this.toasterService.successToaster('تم تسجيل الخروج بنجاح');
  }
}

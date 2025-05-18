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
import { MatIcon } from '@angular/material/icon';
import { HeaderComponent } from './core/component/header/header.component';
import { CardComponent } from './shared/card/card.component';
import { FooterComponent } from './core/component/footer/footer.component';
import { BorderCircleComponent } from './shared/border-circle/border-circle.component';
import { SubHeaderComponent } from './core/sub-header/sub-header.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatBadge } from '@angular/material/badge';
import { SelectedActivitiesService } from './services/selected-activities.service';
import { ToasterComponent } from './shared/toaster/toaster.component';
import { Toast } from 'primeng/toast';
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

  ngOnInit(): void {}

  changeActivties(name: 'interest' | 'favorite') {
    this.activitiesServices.activitiesSelected$.next(name);
  }

  @ViewChild('drawer')
  drawer!: MatDrawer;

  closeDrawer() {
    this.drawer.close();
  }
}

import { NgFor } from '@angular/common';
import {
  AfterViewInit,
  Component,
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
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadge } from '@angular/material/badge';
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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'new app';
}

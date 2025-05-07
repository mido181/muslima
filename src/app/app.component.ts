import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { HeaderComponent } from './core/component/header/header.component';
import { CardComponent } from './shared/card/card.component';
import { FooterComponent } from './core/component/footer/footer.component';
import { BorderCircleComponent } from './shared/border-circle/border-circle.component';
import { SubHeaderComponent } from './core/sub-header/sub-header.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    MatIcon,
    RouterOutlet,
    HeaderComponent,
    CardComponent,
    FooterComponent,
    BorderCircleComponent,
    SubHeaderComponent,
    DropdownComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'new app';
}

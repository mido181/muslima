import { Component } from '@angular/core';
import { BorderCircleComponent } from '../../shared/border-circle/border-circle.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-sub-header',
  imports: [BorderCircleComponent, MatIcon],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss',
})
export class SubHeaderComponent {}

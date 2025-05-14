import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SubHeaderComponent } from '../../../core/sub-header/sub-header.component';

@Component({
  selector: 'app-interest',
  imports: [RouterOutlet, SubHeaderComponent, RouterLink, RouterLinkActive],
  templateUrl: './interest.component.html',
  styleUrl: './interest.component.scss',
})
export class InterestComponent {
  interestList = [
    { name: 'معحب بي', routeName: '/interest' },
    { name: 'المعجب بهم', routeName: 'interesting' },
    { name: 'الإعجابات المتبادلة', routeName: 'Mutualinterest' },
  ];
}

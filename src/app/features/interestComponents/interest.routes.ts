import { Routes } from '@angular/router';
import { InterestComponent } from './interest/interest.component';
import { InterestMeComponent } from './interest-me/interest-me.component';
import { MutualInterestComponent } from './mutual-interest/mutual-interest.component';
import { MyInterestComponent } from './my-interest/my-interest.component';

export const INTEREST_ROUTE: Routes = [
  {
    path: '',
    component: InterestComponent,
    children: [
      { path: '', component: InterestMeComponent },
      { path: 'Mutualinterest', component: MutualInterestComponent },
      { path: 'interesting', component: MyInterestComponent },
    ],
  },
];

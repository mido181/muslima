import { Routes } from '@angular/router';
import { MatchesFitComponent } from './matches-fit/matches-fit.component';
import { MatchesFitMeComponent } from './matches-fit-me/matches-fit-me.component';
import { MatchesComponent } from './matches/matches.component';

export const MATCHES_ROUTE: Routes = [
  {
    path: '',
    component: MatchesComponent,
    children: [
      { path: '', component: MatchesFitComponent },
      { path: 'fiteBoth', component: MatchesFitMeComponent },
    ],
  },
];

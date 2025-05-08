import { Routes } from '@angular/router';
import { HomeComponent } from './core/component/home/home.component';
import { OnlineComponent } from './features/online/online.component';
import { MessageComponent } from './features/messageComponent/message/message.component';
import { MatchesComponent } from './features/matches/matches.component';
import { ProfileComponent } from './features/profile/profile.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'online', component: OnlineComponent },
  { path: 'messages', component: MessageComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'profile/:id', component: ProfileComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }, // Wildcard for 404
];

import { Routes } from '@angular/router';
import { HomeComponent } from './core/component/home/home.component';
import { OnlineComponent } from './features/online/online.component';
import { MatchesComponent } from './features/matches/matches.component';
import { ProfileComponent } from './features/profile/profile.component';
import { MessageComponent } from './features/messageComponent/message.component';
import { MessagesRoomComponent } from './features/messageComponent/messages-room/messages-room.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'online', component: OnlineComponent },
  { path: 'messages', component: MessageComponent },
  { path: 'messages-room/:id', component: MessagesRoomComponent },

  { path: 'matches', component: MatchesComponent },
  { path: 'profile/:id', component: ProfileComponent },

  { path: '**', redirectTo: '/home' }, // Wildcard for 404
];

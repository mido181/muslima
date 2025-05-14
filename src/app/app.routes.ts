import { Routes } from '@angular/router';
import { HomeComponent } from './core/component/home/home.component';
import { OnlineComponent } from './features/online/online.component';
import { MatchesComponent } from './features/matches/matches.component';
import { ProfileComponent } from './features/profile/profile.component';
import { MessageComponent } from './features/messageComponent/message.component';
import { MessagesRoomComponent } from './features/messageComponent/messages-room/messages-room.component';
import { LoginComponent } from './core/component/auth/login/login.component';
import { RegisterComponent } from './core/component/auth/register/register.component';
import { InterestComponent } from './features/interestModule/interest/interest.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'online', component: OnlineComponent },
  { path: 'messages-room/:id', component: MessagesRoomComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  
  { path: 'messages', loadChildren(){return import('./features/messageComponent/Message.routes').then(R=>R.MESSAGE_ROUTE)} },
  
  { path: 'interest',
    async loadChildren() {
      const R = await import('./features/interestModule/interest.routes');
      return R.INTEREST_ROUTE;
    },
  },

  { path: '**', redirectTo: '/home' }, // Wildcard for 404
];

import { Routes } from '@angular/router';
import { isLoginGuard } from './core/component/guard/is-login.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent() {
      return import('./core/component/home/home.component').then(
        (c) => c.HomeComponent
      );
    },
  },
  {
    path: 'online',
    canActivate: [isLoginGuard],

    loadComponent() {
      return import('./features/online/online.component').then(
        (c) => c.OnlineComponent
      );
    },
  },
  {
    path: 'messages-room/:id',
    canActivate: [isLoginGuard],
    loadComponent() {
      return import(
        './features/messageComponent/messages-room/messages-room.component'
      ).then((c) => c.MessagesRoomComponent);
    },
  },
  {
    path: 'matches',
    canActivate: [isLoginGuard],
    loadComponent() {
      return import('./features/matches/matches.component').then(
        (c) => c.MatchesComponent
      );
    },
  },
  {
    path: 'profile/:id',
    canActivate: [isLoginGuard],
    loadComponent() {
      return import('./features/profile/profile.component').then(
        (c) => c.ProfileComponent
      );
    },
  },
  {
    path: 'login',
    canActivate: [],

    loadComponent() {
      return import('./core/component/auth/login/login.component').then(
        (c) => c.LoginComponent
      );
    },
  },
  {
    path: 'register',
    // canActivate: [!isLoginGuard],

    loadComponent() {
      return import('./core/component/auth/register/register.component').then(
        (c) => c.RegisterComponent
      );
    },
  },

  {
    path: 'messages',
    canActivate: [isLoginGuard],
    loadChildren() {
      return import('./features/messageComponent/Message.routes').then(
        (R) => R.MESSAGE_ROUTE
      );
    },
  },

  {
    path: 'interest',
    canActivate: [isLoginGuard],
    async loadChildren() {
      const R = await import('./features/interestModule/interest.routes');
      return R.INTEREST_ROUTE;
    },
  },

{
  path: 'matches',
  canActivate: [isLoginGuard],
  async loadChildren() {
    const R = await import('./features/matchesModule/matches.routes');
     return  R.MATCHES_ROUTE;
},},

  {
    path: 'favorite',
    canActivate: [isLoginGuard],

    async loadChildren() {
      const R = await import('./features/interestModule/interest.routes');
      return R.INTEREST_ROUTE;
    },
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

import { Routes } from '@angular/router';
import { isLoginGuard } from './core/guard/is-login.guard';

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
    // canActivate: [isLoginGuard],
    loadComponent() {
      return import('./features/online/online.component').then(
        (c) => c.OnlineComponent
      );
    },
  },

  {
    path: 'pricePlans',
    // canActivate: [isLoginGuard],
    loadComponent() {
      return import('./features/payment/payment.component').then(
        (c) => c.PaymentComponent
      );
    },
  },

  {
    path: 'messages-room/:id',
    // canActivate: [isLoginGuard],
    loadComponent() {
      return import(
        './features/messageComponents/messages-room/messages-room.component'
      ).then((c) => c.MessagesRoomComponent);
    },
  },
  {
    path: 'matches',
    // canActivate: [isLoginGuard],
    loadChildren() {
      return import('./features/matchesComponents/matches.routes').then(
        (R) => R.MATCHES_ROUTE
      );
    },
  },
  {
    path: 'profile/:id',
    // canActivate: [isLoginGuard],
    loadComponent() {
      return import(
        './features/profileComponents/profile/profile.component'
      ).then((c) => c.ProfileComponent);
    },
  },
    {
    path: 'editProfile',
    // canActivate: [isLoginGuard],

    async loadComponent() {
      const c = await import('./features/profileComponents/edit-profile/edit-profile.component');
      return c.EditProfileComponent;
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
    loadComponent() {
      return import('./core/component/auth/register/register.component').then(
        (c) => c.RegisterComponent
      );
    },
  },
  {
    path: 'blockList',
    loadComponent() {
      return import('./features/blocked/blocked.component').then(
        (c) => c.BlockedComponent
      );
    },
  },
    {
    path: 'viewedProfile',
    loadComponent() {
      return import('./features/watch-profile/watch-profile.component').then(
        (c) => c.WatchProfileComponent
      );
    },
  },

  {
    path: 'messages',
    // canActivate: [isLoginGuard],
    loadChildren() {
      return import('./features/messageComponents/Message.routes').then(
        (R) => R.MESSAGE_ROUTE
      );
    },
  },

  {
    path: 'interest',
    // canActivate: [isLoginGuard],
    async loadChildren() {
      const R = await import('./features/interestComponents/interest.routes');
      return R.INTEREST_ROUTE;
    },
  },

  {
    path: 'matches',
    canActivate: [isLoginGuard],
    async loadChildren() {
      const R = await import('./features/matchesComponents/matches.routes');
      return R.MATCHES_ROUTE;
    },
  },

  {
    path: 'favorite',
    // canActivate: [isLoginGuard],

    async loadChildren() {
      const R = await import('./features/interestComponents/interest.routes');
      return R.INTEREST_ROUTE;
    },
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];

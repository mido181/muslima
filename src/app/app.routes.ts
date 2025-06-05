import { Routes } from '@angular/router';
import { isLoginGuard } from './core/guard/is-login.guard';
import { authGuard } from './core/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent() {
      return import('./core/component/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      );
    },
    canActivate: [authGuard],
  },
  {
    path: 'home',
    loadComponent() {
      return import('./core/component/home/homecomponent').then(
        (c) => c.HomeComponent
      );
    },
    canActivate: [isLoginGuard],
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
    path: 'pricePlans',
    canActivate: [isLoginGuard],
    loadComponent() {
      return import('./features/payment/payment.component').then(
        (c) => c.PaymentComponent
      );
    },
  },

  {
    path: 'matches',
    canActivate: [isLoginGuard],
    loadChildren() {
      return import('./features/matchesComponents/matches.routes').then(
        (R) => R.MATCHES_ROUTE
      );
    },
  },
  {
    path: 'profile/:id',
    canActivate: [isLoginGuard],
    loadComponent() {
      return import(
        './features/profileComponents/profile/profile.component'
      ).then((c) => c.ProfileComponent);
    },
  },
  {
    path: 'profile-mangement',
    loadChildren: () =>
      import(
        './features/profileMangementComponent/profileMangement.routes'
      ).then((c) => c.profileManagementRoutes),
    canActivate: [isLoginGuard],
  },

  {
    path: 'login',
    loadComponent() {
      return import('./core/component/auth/login/login.component').then(
        (c) => c.LoginComponent
      );
    },
    canActivate: [authGuard],
  },

  {
    path: 'register',
    loadComponent() {
      return import('./core/component/auth/register/register.component').then(
        (c) => c.RegisterComponent
      );
    },
    canActivate: [authGuard],
  },
  {
    path: 'blockList',
    canActivate: [isLoginGuard],
    loadComponent() {
      return import('./features/blocked/blocked.component').then(
        (c) => c.BlockedComponent
      );
    },
  },
  {
    path: 'viewedProfile',
    canActivate: [isLoginGuard],
    loadComponent() {
      return import('./features/watch-profile/watch-profile.component').then(
        (c) => c.WatchProfileComponent
      );
    },
  },

  {
    path: 'messages',
    canActivate: [isLoginGuard],
    loadChildren() {
      return import('./features/messageComponents/Message.routes').then(
        (R) => R.MESSAGE_ROUTE
      );
    },
  },
  {
    path: 'interest',
    canActivate: [isLoginGuard],
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
    canActivate: [isLoginGuard],

    async loadChildren() {
      const R = await import('./features/interestComponents/interest.routes');
      return R.INTEREST_ROUTE;
    },
  },

  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

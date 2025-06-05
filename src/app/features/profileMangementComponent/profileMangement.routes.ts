import { Routes } from '@angular/router';

export const profileManagementRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./profile-mangement/profile-mangement.component').then(
        (c) => c.ProfileMangementComponent
      ),
    children: [
      {
        path: ':id',
        loadComponent: () =>
          import('./edit-profile/edit-profile.component').then(
            (c) => c.EditProfileComponent
          ),
      },
      {
        path: 'images',
        loadComponent: () =>
          import('./profile-images/profile-images.component').then(
            (c) => c.ProfileImagesComponent
          ),
      },
      {
        path: 'interest',
        loadComponent: () =>
          import('./interest-me/interest-me.component').then(
            (c) => c.InterestMeComponent
          ),
      },
    ],
  },
];

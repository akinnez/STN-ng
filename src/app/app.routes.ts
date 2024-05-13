import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@/views/landing/landing.component').then(
        (_) => _.LandingComponent
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@/views/auth/auth-routing.module').then(
        (_) => _.AuthComponentsRoutingModule
      ),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('@/views/user/user-routing.module').then(
        (_) => _.UserRoutingModule
      ),
  },
];

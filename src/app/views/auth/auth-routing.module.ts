import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'join',
    loadComponent: () =>
      import('@/views/auth/join/join.component').then((_) => _.JoinComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@/views/auth/login/login.component').then(
        (_) => _.LoginComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthComponentsRoutingModule {}

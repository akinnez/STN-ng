import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('@/views/user/dashboard/dashboard.component').then(
        (_) => _.DashboardComponent
      ),
  },
  {
    path: 'tracking',
    loadComponent: () =>
      import('@/views/user/tracking/tracking.root').then(
        (_) => _.TrackingRootComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@/views/user/tracking/main/main.component').then(
            (_) => _.MainComponent
          ),
      },
      {
        path: 'real-time',
        loadComponent: () =>
          import('@/views/user/tracking/realtime/realtime.component').then(
            (_) => _.RealtimeComponent
          ),
      },
      {
        path: 'create',
        loadComponent: () =>
          import('@/views/user/tracking/create/create.component').then(
            (_) => _.CreateComponent
          ),
      },
    ],
  },

  {
    path: 'label',
    loadComponent: () =>
      import('@/views/user/labels/label.root').then(
        (_) => _.LabelRootComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('@/views/user/labels/label/labels.component').then(
            (_) => _.LabelsComponent
          ),
      },
      {
        path: 'create',
        loadComponent: () =>
          import('@/views/user/labels/create/create.component').then(
            (_) => _.CreateComponent
          ),
      },
    ],
  },
  {
    path: 'courier/detection',
    loadComponent: () =>
      import('@/views/user/courier-detection/courier-detection.component').then(
        (_) => _.CourierDetectionComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

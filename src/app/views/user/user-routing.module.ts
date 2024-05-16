import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('@/views/landing/landing.component').then(
        (_) => _.LandingComponent
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
        children: [
          {
            path: '',
            loadComponent: () =>
              import(
                '@/views/user/labels/basic-info/basic-info.component'
              ).then((_) => _.BasicInfoComponent),
          },
          {
            path: 'package-info',
            loadComponent: () =>
              import(
                '@/views/user/labels/package-info/package-info.component'
              ).then((_) => _.PackageInfoComponent),
          },
          {
            path: 'sender-reciever',
            loadComponent: () =>
              import(
                '@/views/user/labels/sender-info/sender-info.component'
              ).then((_) => _.SenderInfoComponent),
          },
          {
            path: 'invoice-info',
            loadComponent: () =>
              import(
                '@/views/user/labels/invoice-info/invoice-info.component'
              ).then((_) => _.InvoiceInfoComponent),
          },
          {
            path: 'export-info',
            loadComponent: () =>
              import(
                '@/views/user/labels/export-info/export-info.component'
              ).then((_) => _.ExportInfoComponent),
          },
          {
            path: 'clear-info',
            loadComponent: () =>
              import(
                '@/views/user/labels/clearance-info/clearance-info.component'
              ).then((_) => _.ClearanceInfoComponent),
          },
        ],
      },
      {
        path: 'preview',
        loadComponent: () =>
          import('@/views/user/labels/preview/preview.component').then(
            (_) => _.PreviewComponent
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

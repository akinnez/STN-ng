import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root-tracking',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
})
export class TrackingRootComponent {}

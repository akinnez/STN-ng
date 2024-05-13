import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '@/component/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  public authService = inject(AuthService);

  ngOnInit() {}
}

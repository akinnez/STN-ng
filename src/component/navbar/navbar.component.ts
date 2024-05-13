import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { MenuComponent } from '../Icons/menu';
import { CloseComponent } from '../Icons/close';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent,
    MenuComponent,
    CloseComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isOpen: boolean = false;
  local!: string | null;
  private route = inject(Router);
  private authservice = inject(AuthService);
  token!: boolean;

  constructor() {}

  ngOnInit(): void {
    this.token = this.authservice.onLoad();
  }

  logOut() {
    sessionStorage.removeItem('token');
    this.token = this.authservice.onLoad();
    this.route.navigateByUrl('/', {
      skipLocationChange: false,
      replaceUrl: true,
    });
  }

  open() {
    this.isOpen = true;
  }
  close() {
    this.isOpen = false;
  }
}

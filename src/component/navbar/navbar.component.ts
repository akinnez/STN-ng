import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isOpen: boolean = false;
  local!: string | null;
  token!: boolean;
  destroy: any;
  username!: string | any;

  private route = inject(Router);
  // public auth = inject(AuthserviceService);
  // public user = inject(UserService);
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      // this.local = getData(localKey);
      if (this.local) {
        setTimeout(() => {
          // let user: any = JSON.parse(decrypty(getData(localUser)));
          // this.getUserName(user.username);
        });
        this.token = true;
      } else {
        this.token = false;
      }
    });
  }

  logOut() {
    // this.user.logOut();
    setTimeout(() => {
      this.token = false;
      this.route.navigate(['']);
    });
  }
  getUserName(getUser: string) {
    this.username = getUser;
  }
  open() {
    this.isOpen = true;
  }
  close() {
    this.isOpen = false;
  }
}

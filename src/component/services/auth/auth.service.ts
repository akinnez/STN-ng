import isNullOrUndefined from '@/utils/isNullOrUndefied';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  public token: boolean = false;
  public user: any;
  ngOnInit(): void {
    console.log(this.token);
  }
  onLoad() {
    this.user = JSON.parse(sessionStorage.getItem('token') as string);
    console.log(this.user);

    if (!isNullOrUndefined(this.user)) {
      return (this.token = true);
    } else {
      return (this.token = false);
    }
  }
}

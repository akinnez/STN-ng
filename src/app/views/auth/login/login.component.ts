import { MetaService } from '@/component/services/meta/meta.service';
import { Login } from '@/component/types/login.interface';
import { Component, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { form, formtype } from '@/utils/form';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '@/component/button/button.component';
import { CardComponent } from '@/component/card/card.component';
import isNullOrUndefined from '@/utils/isNullOrUndefied';
import { ToastService } from '@/component/services/toast/toast.service';
import { AuthService } from '@/component/services/auth/auth.service';
// import createToast from '@/utils/toastFunction';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, CardComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loading: boolean = false;
  title: string = 'Log In';
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  user: any;
  loginData = [
    { label: 'Username', formcontrol: 'username', type: 'text' },
    {
      label: 'Password',
      formcontrol: 'password',
      type: 'password',
      errorNotice: true,
    },
  ];
  log: Array<formtype> = [
    { controlName: 'username', value: '', validator: Validators.required },
    {
      controlName: 'password',
      value: '',
      validator: [Validators.required, Validators.minLength(6)],
    },
  ];
  data = [
    {
      name: 'description',
      content: 'Log in into your account',
    },
    {
      name: 'keyword',
      content: 'Shipping, Shipment, Shipping Company, Cargo',
    },
  ];
  public meta = inject(MetaService);
  public auth = inject(AuthService);
  public toast = inject(ToastService);
  public loginForm = new FormGroup<Login>(form(this.log));
  private router = inject(Router);

  ngOnInit(): void {
    this.meta.updateMeta(this.title, this.data);
  }

  async submitForm() {
    this.loading = true;

    await import('@/utils/toastFunction').then((_) =>
      _.default(this.container, this.toast)
    );

    // CHECKING VALIDITY OF THE FORM
    if (!this.loginForm.valid) {
      return this.toast.show('Invalid Form');
    }
    this.user = JSON.parse(
      localStorage.getItem(`${this.loginForm.value.username}`) as string
    );
    let res: any = this.loginCred(this.user, this.loginForm.value);

    if (res.status == 200) {
      //manually setting token
      sessionStorage.setItem(
        'token',
        JSON.stringify({ isTokenSet: true, username: this.user.username })
      );
      this.toast.show(res.message);

      location.href = `/user/dashboard`;

      this.loading = false;
    } else {
      this.toast.show(res.message);
      this.loading = false;
    }
  }

  loginCred(user: any, form: any) {
    if (isNullOrUndefined(user) || user.password != form.password) {
      return { message: 'Incorrect Username or Password ', status: 401 };
    }
    return (
      user &&
      user.username == form.username &&
      user.password == form.password && {
        message: 'User Logged In Successfully',
        status: 200,
      }
    );
  }
}

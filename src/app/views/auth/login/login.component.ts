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

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, CardComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
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
  public toast = inject(ToastService);
  public loginForm = new FormGroup<Login>(form(this.log));
  private router = inject(Router);

  ngOnInit(): void {
    this.meta.updateMeta(this.title, this.data);
  }

  async submitForm() {
    // CHECKING VALIDITY OF THE FORM
    if (!this.loginForm.valid) {
      return this.toast.show('Invalid Form');
    }

    this.user = JSON.parse(
      localStorage.getItem(`${this.loginForm.value.username}`) as string
    );
    let res: any = this.loginCred(this.user, this.loginForm.value);
    this.toast.show(res?.message);

    //Creating a toast
    const { ToastComponent } = await import('@/utils/toast.component');
    let toastParams = this.container.createComponent(ToastComponent);
    toastParams.instance.toasts = this.toast.toasts;
    toastParams.instance.container = this.container;
  }

  loginCred(user: any, form: any) {
    if (isNullOrUndefined(user)) {
      return { message: 'User Not Found ', status: 404 };
    }

    return (
      user.username == form.value.username &&
      user.password == form.value.password && {
        message: 'User Logged In Successfully',
        status: 200,
      }
    );
  }
}

import { MetaService } from '@/component/services/meta/meta.service';
import { Login } from '@/component/types/login.interface';
import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { form, formtype } from '../../../../utils/form';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '@/component/button/button.component';
import { CardComponent } from '@/component/card/card.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonComponent, CardComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  title: string = 'Log In';
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
  public registerForm = new FormGroup<Login>(form(this.log));
  private router = inject(Router);

  ngOnInit(): void {
    this.meta.updateMeta(this.title, this.data);
  }

  submitForm() {
    // CHECKING VALIDITY OF THE FORM
    if (!this.registerForm.valid) {
      return '';
    }
    const form: any = this.registerForm.value;

    const credentials = {
      username: form.username,
      password: form.password,
    };

    return '';
  }
}

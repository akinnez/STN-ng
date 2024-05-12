import { MetaService } from '@/component/services/meta/meta.service';
import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { form, formtype } from '@/utils/form';
import { Signup } from '@/component/types/signup.interface';
import { ButtonComponent } from '@/component/button/button.component';
import { CardComponent } from '@/component/card/card.component';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [ButtonComponent, CardComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss',
})
export class JoinComponent {
  title: string = 'Join us';
  signupData = [
    { label: 'First Name', formcontrol: 'firstName', type: 'text' },
    { label: 'Last Name', formcontrol: 'lastName', type: 'text' },
    { label: 'Email', formcontrol: 'email', type: 'email' },
    { label: 'Username', formcontrol: 'username', type: 'text' },
    {
      label: 'Password',
      formcontrol: 'password',
      type: 'password',
      errorNotice: true,
    },
  ];
  data = [
    {
      name: 'description',
      content: 'Join us on an amazing journey',
    },
    {
      name: 'keyword',
      content: 'Shipping, Shipment, Shipping Company, Cargo',
    },
  ];
  public meta = inject(MetaService);

  ngOnInit(): void {
    this.meta.updateMeta(this.title, this.data);
  }

  log: Array<formtype> = [
    { controlName: 'firstName', value: '', validator: Validators.required },
    { controlName: 'lastName', value: '', validator: Validators.required },
    {
      controlName: 'email',
      value: '',
      validator: [Validators.email, Validators.required],
    },
    { controlName: 'username', value: '', validator: Validators.required },
    {
      controlName: 'password',
      value: '',
      validator: [Validators.required, Validators.minLength(6)],
    },
  ];
  public registerForm = new FormGroup<Signup>(form(this.log));
  private router = inject(Router);

  constructor() {}

  submitForm() {
    // CHECKING VALIDITY OF THE FORM
    if (!this.registerForm.valid) {
      return '';
    }
    if (localStorage.getItem(`${this.registerForm.value.username}`)) {
      return 'user exist';
    }
    localStorage.setItem(
      `${this.registerForm.value.username}`,
      JSON.stringify(this.registerForm.value)
    );
    return '';
  }
}

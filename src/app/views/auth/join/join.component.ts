import { MetaService } from '@/component/services/meta/meta.service';
import { Component, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { form, formtype } from '@/utils/form';
import { Signup } from '@/component/types/signup.interface';
import { ButtonComponent } from '@/component/button/button.component';
import { CardComponent } from '@/component/card/card.component';
import { ToastService } from '@/component/services/toast/toast.service';
import isNullOrUndefined from '@/utils/isNullOrUndefied';
import { ModalComponent } from '@/component/modal/modal.component';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    ReactiveFormsModule,
    RouterModule,
    ModalComponent,
  ],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss',
})
export class JoinComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
  @ViewChild('modal', { read: ViewContainerRef, static: true })
  modal!: ViewContainerRef;
  open: boolean = false;
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
  public toast = inject(ToastService);

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
  onClose() {
    this.open = false;
  }
  async submitForm() {
    // CHECKING VALIDITY OF THE FORM
    if (!this.registerForm.valid) {
      this.showToast();
      return this.toast.show('Invalid Form');
    }
    let res = this.signUpCred(
      localStorage.getItem(`${this.registerForm.value.username}`)
    );
    if (res.status == 401) {
      this.showToast();
      return this.toast.show(res.message);
    }
    const { JoinSuccessComponent } = await import(
      '@/utils/JoinSuccess.component'
    );
    this.modal.clear();
    this.modal.createComponent(JoinSuccessComponent);

    localStorage.setItem(
      `${this.registerForm.value.username}`,
      JSON.stringify(this.registerForm.value)
    );
    return (this.open = true);
  }

  signUpCred(user: any) {
    if (!isNullOrUndefined(user)) {
      return { message: 'User Already Exist', status: 401 };
    }
    return {
      message: 'User Created Successfully',
      status: 201,
    };
  }
  showToast() {
    import('@/utils/toastFunction').then((_) =>
      _.default(this.container, this.toast)
    );
  }
}

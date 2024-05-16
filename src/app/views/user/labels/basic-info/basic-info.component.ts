import { ButtonComponent } from '@/component/button/button.component';
import { form, formtype } from '@/utils/form';
import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-basic-info',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.scss',
})
export class BasicInfoComponent {
  title = 'Create a Label';
  public router = inject(Router);

  createData = [
    { label: 'Account Id', formcontrol: 'account_id', type: 'text' },
    { label: 'Carrier Id', formcontrol: 'carrier_id', type: 'text' },
    {
      label: 'Shipping Service',
      formcontrol: 'shipping_service',
      type: 'text',
    },
    {
      label: 'Currency',
      formcontrol: 'currency',
      type: 'text',
    },
    {
      label: 'Total Actual Weight',
      formcontrol: 'total_actual_weight',
      type: 'text',
    },
    { label: 'Incoterm', formcontrol: 'incoterm', type: 'text' },
  ];

  log: Array<formtype> = [
    {
      value: '',
      validator: Validators.required,
      controlName: 'account_id',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'carrier_id',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'incoterm',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'shipping_service',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'currency',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'total_actual_weight',
    },
  ];

  public createForm = new FormGroup<any>(form(this.log));

  submitForm() {
    if (!this.createForm.valid) {
      return;
    }
    sessionStorage.setItem('basic', JSON.stringify(this.createForm.value));
    this.router.navigateByUrl('/user/label/create/sender-reciever');
  }
}

import { ButtonComponent } from '@/component/button/button.component';
import { form, formtype } from '@/utils/form';
import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-invoice-info',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, RouterModule],
  templateUrl: './invoice-info.component.html',
  styleUrl: './invoice-info.component.scss',
})
export class InvoiceInfoComponent {
  private router = inject(Router);
  createData = [
    { label: 'Invoice Date', formcontrol: 'invoice_date', type: 'date' },
    { label: 'Invoice Title', formcontrol: 'title', type: 'text' },
    {
      label: 'Invoice Number',
      formcontrol: 'invoice_number',
      type: 'text',
    },
    {
      label: 'Invoice Signature',
      formcontrol: 'signature',
      type: 'file',
      accept: 'image/*',
    },
  ];

  log: Array<formtype> = [
    {
      value: '',
      validator: Validators.required,
      controlName: 'invoice_date',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'invoice_number',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'title',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'signature',
    },
  ];

  public createForm = new FormGroup<any>(form(this.log));

  submitForm() {
    if (!this.createForm.valid) {
      return;
    }
    const payload = {
      invoice_date: this.createForm.value.invoice_date,
      invoice_number: this.createForm.value.invoice_number,
      title: this.createForm.value.title,
      signature: '',
    };

    localStorage.setItem('invoice', JSON.stringify(payload));
    this.router.navigateByUrl('/user/label/create/export-info');
  }
}

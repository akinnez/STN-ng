import { ButtonComponent } from '@/component/button/button.component';
import { form, formtype } from '@/utils/form';
import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-export-info',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './export-info.component.html',
  styleUrl: './export-info.component.scss',
})
export class ExportInfoComponent {
  private router = inject(Router);
  createData = [
    {
      label: "Manufacturing Company's Country Code",
      formcontrol: 'country_code',
      type: 'text',
    },
    { label: 'Unit Price', formcontrol: 'unit_price', type: 'number' },
    {
      label: 'Quantity',
      formcontrol: 'quantity',
      type: 'number',
    },
  ];

  log: Array<formtype> = [
    {
      value: '',
      validator: Validators.required,
      controlName: 'country_code',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'unit_price',
    },
    {
      value: 1,
      validator: Validators.required,
      controlName: 'quantity',
    },
  ];

  public createForm = new FormGroup<any>(form(this.log));

  submitForm() {
    if (!this.createForm.valid) {
      return;
    }
    const payload = {
      country_code: this.createForm.value.country_code,
      unit_price: parseFloat(this.createForm.value.unit_price),
      quantity: parseInt(this.createForm.value.quantity),
    };

    localStorage.setItem('export', JSON.stringify(payload));
    this.router.navigateByUrl('/user/label/create/clear-info');
  }
}

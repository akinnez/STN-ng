import { ButtonComponent } from '@/component/button/button.component';
import { form, formtype } from '@/utils/form';
import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-package-info',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, RouterModule],
  templateUrl: './package-info.component.html',
  styleUrl: './package-info.component.scss',
})
export class PackageInfoComponent {
  private router = inject(Router);
  payload: Array<object | any> = [];
  createData = [
    {
      label: 'Height (in cm)',
      formcontrol: 'height',
      type: 'number',
      required: true,
    },
    {
      label: 'Width (in cm)',
      formcontrol: 'width',
      type: 'number',
      required: true,
    },
    {
      label: 'Weight (in kg)',
      formcontrol: 'weight',
      type: 'number',
      required: true,
    },
    {
      label: 'Length (in cm)',
      formcontrol: 'length',
      type: 'number',
      required: true,
    },
    {
      label: 'Reference',
      formcontrol: 'reference',
      type: 'text',
      required: false,
    },
  ];

  log: Array<formtype> = [
    {
      value: '',
      validator: Validators.required,
      controlName: 'height',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'width',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'length',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'weight',
    },
    {
      value: '',
      controlName: 'reference',
    },
  ];

  public createForm = new FormGroup<any>(form(this.log));

  addNew() {
    if (!this.createForm.valid) {
      return;
    }
    this.createPayload();
    this.createForm.patchValue({
      height: '',
      width: '',
      weight: '',
      length: '',
      reference: '',
    });
  }
  submitForm() {
    if (!this.createForm.valid) {
      return;
    }
    this.createPayload();
    sessionStorage.setItem('package', JSON.stringify(this.payload));
    this.router.navigateByUrl('/user/label/create/invoice-info');
  }

  createPayload() {
    const value = {
      height: parseFloat(this.createForm.value.height).toFixed(2),
      weight: parseFloat(this.createForm.value.weight).toFixed(2),
      width: parseFloat(this.createForm.value.width).toFixed(2),
      length: parseFloat(this.createForm.value.length).toFixed(2),
      reference: this.createForm.value.reference,
    };
    this.payload.push(value);

    //add toast here
  }
}

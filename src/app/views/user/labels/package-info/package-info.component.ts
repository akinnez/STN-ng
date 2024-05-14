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
  createData = [
    { label: 'Height (in cm)', formcontrol: 'height', type: 'number' },
    { label: 'Width (in cm)', formcontrol: 'width', type: 'number' },
    { label: 'Weight (in cm)', formcontrol: 'weight', type: 'number' },
    {
      label: 'Length (in cm)',
      formcontrol: 'length',
      type: 'number',
    },
    { label: 'Reference', formcontrol: 'reference', type: 'text' },
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

  submitForm() {
    if (!this.createForm.valid) {
      return;
    }
    const payload = {
      height: parseFloat(this.createForm.value.height),
      weight: parseFloat(this.createForm.value.weight),
      width: parseFloat(this.createForm.value.width),
      length: parseFloat(this.createForm.value.length),
      reference: this.createForm.value.length,
    };
    sessionStorage.setItem('package', JSON.stringify(payload));
    this.router.navigateByUrl('/user/label/create/invoice-info');
  }
}

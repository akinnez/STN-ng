import { ButtonComponent } from '@/component/button/button.component';
import { form, formtype } from '@/utils/form';
import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-clearance-info',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonComponent, RouterModule],
  templateUrl: './clearance-info.component.html',
  styleUrl: './clearance-info.component.scss',
})
export class ClearanceInfoComponent {
  private router = inject(Router);
  log: Array<formtype> = [
    {
      value: '',
      validator: Validators.required,
      controlName: 'purpose',
    },
  ];

  public createForm = new FormGroup<any>(form(this.log));

  submitForm() {
    if (!this.createForm.valid) {
      return;
    }
    localStorage.setItem(
      'clearance_info',
      JSON.stringify(this.createForm.value)
    );
    this.router.navigateByUrl('/user/label/preview');
  }
}

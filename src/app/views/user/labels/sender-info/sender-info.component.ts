import { ButtonComponent } from '@/component/button/button.component';
import { form, formtype } from '@/utils/form';
import { Component, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sender-info',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './sender-info.component.html',
  styleUrl: './sender-info.component.scss',
})
export class SenderInfoComponent {
  public router = inject(Router);

  createData = [
    { label: 'Receiver Name', formcontrol: 'name', type: 'text' },
    {
      label: 'Receiver Phone Number',
      formcontrol: 'phone',
      type: 'number',
    },
    { label: 'Receiver Address', formcontrol: 'address1', type: 'text' },
    { label: 'Receiver State', formcontrol: 'state_province', type: 'text' },
    {
      label: 'Receiver Country ISO Code',
      formcontrol: 'country_code',
      type: 'text',
    },
    { label: 'Reciever City', formcontrol: 'city', type: 'text' },
    {
      label: 'Reciever Poster Code',
      formcontrol: 'poster_code',
      type: 'number',
    },

    { label: 'Sender Name', formcontrol: 'sender_name', type: 'text' },
    {
      label: 'Sender Phone Number',
      formcontrol: 'phone1',
      type: 'number',
    },
    { label: 'Sender Address', formcontrol: 'sender_address1', type: 'text' },
    {
      label: 'Sender State',
      formcontrol: 'sender_state_province',
      type: 'text',
    },
    {
      label: 'Sender Country ISO Code',
      formcontrol: 'sender_country_code',
      type: 'text',
    },
    { label: 'Sender City', formcontrol: 'sender_city', type: 'text' },
    {
      label: 'Sender Poster Code',
      formcontrol: 'sender_poster_code',
      type: 'number',
    },
  ];

  log: Array<formtype> = [
    {
      value: '',
      validator: Validators.required,
      controlName: 'name',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'phone',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'address1',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'state_province',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'country_code',
    },
    { value: '', validator: Validators.required, controlName: 'city' },
    {
      value: '',
      validator: Validators.required,
      controlName: 'poster_code',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'sender_name',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'phone1',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'sender_address1',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'sender_state_province',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'sender_country_code',
    },
    { value: '', validator: Validators.required, controlName: 'sender_city' },
    {
      value: '',
      validator: Validators.required,
      controlName: 'sender_poster_code',
    },
  ];

  public createForm = new FormGroup<any>(form(this.log));

  submitForm() {
    if (!this.createForm.valid) {
      return;
    }
    const payload = {
      ship_to: {
        name: this.createForm.value.name,
        phone: this.createForm.value.phone,
        address: this.createForm.value.address1,
        state_province: this.createForm.value.state_province,
        country_code: this.createForm.value.country_code,
        poster_code: this.createForm.value.poster_code,
      },
      ship_from: {
        name: this.createForm.value.sender_name,
        phone: this.createForm.value.phone1,
        address: this.createForm.value.sender_address1,
        state_province: this.createForm.value.sender_state_province,
        country_code: this.createForm.value.sender_country_code,
        poster_code: this.createForm.value.sender_poster_code,
      },
    };
    sessionStorage.setItem('basic', JSON.stringify(payload));
    this.router.navigateByUrl('/user/label/create/package-info');
  }
}

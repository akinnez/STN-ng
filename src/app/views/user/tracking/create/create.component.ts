import { ButtonComponent } from '@/component/button/button.component';
import { CardComponent } from '@/component/card/card.component';
import { ShipmentService } from '@/component/services/shipment/shipment.service';
import { ToastService } from '@/component/services/toast/toast.service';
import { form, formtype } from '@/utils/form';
import { HttpClientModule } from '@angular/common/http';
import { Component, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CardComponent,
    ButtonComponent,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  title = 'Create Tracking';
  private router = inject(Router);
  private toast = inject(ToastService);
  private shipment = inject(ShipmentService);

  createData = [
    { label: 'Carrier Id', formcontrol: 'carrier_id', type: 'text' },
    { label: 'Tracking Number', formcontrol: 'tracking_number', type: 'text' },
  ];

  log: Array<formtype> = [
    {
      value: '',
      validator: Validators.required,
      controlName: 'carrier_id',
    },
    {
      value: '',
      validator: Validators.required,
      controlName: 'tracking_number',
    },
  ];

  public createForm = new FormGroup<any>(form(this.log));

  submitForm() {
    if (!this.createForm.valid) {
      this.showToast();
      return this.toast.show('Invalid Form');
    }
    const payload = {
      carrier_id: this.createForm.value.carrier_id,
      tracking_number: this.createForm.value.tracking_number,
      webhook_url: environment.webhookUrl,
    };

    try {
      this.showToast();
      let sub = this.shipment.createTracking(payload).subscribe({
        next: (res) => {
          if (res.code == 200) {
            sessionStorage.setItem(
              'tracking',
              JSON.stringify(this.createForm.value)
            );
            this.toast.show('Tracking Created Successfully');
          }
          this.toast.show('Oops, an error was encountered');
        },
        error: (err) => {
          this.toast.show(err.message);
        },
        complete: () => {
          sub.unsubscribe();
        },
      });
    } catch (error: any) {
      this.toast.show(error?.err?.message);
    }
  }
  showToast() {
    import('@/utils/toastFunction').then((_) =>
      _.default(this.container, this.toast)
    );
  }
}

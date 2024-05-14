import { ButtonComponent } from '@/component/button/button.component';
import { CardComponent } from '@/component/card/card.component';
import { ShipmentService } from '@/component/services/shipment/shipment.service';
import { ToastService } from '@/component/services/toast/toast.service';
import { form, formtype } from '@/utils/form';
import { Component, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { SpinnerComponent } from '@/component/Icons/Spinner';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CardComponent,
    ButtonComponent,
    ReactiveFormsModule,
    RouterModule,
    SpinnerComponent,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  title = 'Create Tracking';
  loading = false;
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
      this.loading = true;
      this.showToast();
      let sub = this.shipment.createTracking(payload).subscribe({
        next: (res) => {
          if (res.code == 200) {
            sessionStorage.setItem(
              'tracking',
              JSON.stringify(this.createForm.value)
            );
            this.toast.show('Tracking Created Successfully');
            this.loading = false;
            this.router.navigateByUrl('/user/tracking');
          }

          this.toast.show('Oops, an error was encountered');
          this.loading = false;
        },
        error: (err) => {
          this.toast.show(err.message);
          this.loading = false;
        },
        complete: () => {
          sub.unsubscribe();
        },
      });
    } catch (error: any) {
      this.toast.show(error?.err?.message);
      this.loading = false;
    }
  }
  showToast() {
    import('@/utils/toastFunction').then((_) =>
      _.default(this.container, this.toast)
    );
  }
}

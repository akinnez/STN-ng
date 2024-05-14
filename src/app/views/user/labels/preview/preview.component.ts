import { ShipmentService } from '@/component/services/shipment/shipment.service';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss',
})
export class PreviewComponent implements OnInit {
  private shipmentService = inject(ShipmentService);
  basic: any;
  export: any;
  invoice: any;
  clearance: any;
  package: any;

  ngOnInit(): void {
    this.basic = JSON.parse(sessionStorage.getItem('basic') as string) || null;
    this.export =
      JSON.parse(sessionStorage.getItem('export') as string) || null;
    this.invoice =
      JSON.parse(sessionStorage.getItem('invoice') as string) || null;
    this.package =
      JSON.parse(sessionStorage.getItem('package') as string) || null;
    this.clearance =
      JSON.parse(sessionStorage.getItem('clearance') as string) || null;
  }

  submitForm() {
    const payload = {
      ...this.basic,
      invoiceinfo: this.invoice,
      customs_items: this.clearance,
      packages: this.package,
    };
    let shipment = this.shipmentService.createLabel(payload).subscribe({
      next: (res) => {},
      error: (err) => {},
      complete: () => {
        shipment.unsubscribe();
      },
    });
  }
}

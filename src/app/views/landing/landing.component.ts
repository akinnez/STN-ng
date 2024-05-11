import { Component, OnInit, inject } from '@angular/core';
import { MetaService } from '@/component/services/meta/meta.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnInit {
  title: string = 'STNaija: Your one-stop to better shipment';
  data = [
    {
      name: 'description',
      content:
        'STNaija offers shipping from the USA to Nigeria at a reduce rate, Export from Nigeria to the USA - Air Shipping, Ocean Shipping, Pick up from anywhere in the USA, deliver to any location in Nigeria',
    },
    {
      name: 'keyword',
      content: 'Shipping, Shipment, Shipping Company, Cargo',
    },
  ];
  ngOnInit(): void {
    this.meta.updateMeta(this.title, this.data);
  }
  public meta = inject(MetaService);
}

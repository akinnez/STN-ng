import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LocationComponent } from '../Icons/location';
import { MailComponent } from '../Icons/mail';
import { PhoneComponent } from '../Icons/phone';
import { YoutubeComponent } from '../Icons/youtube';
import { FacebookComponent } from '../Icons/facebook';
import { InstagramComponent } from '../Icons/instagram';
import { twitterComponent } from '../Icons/twitter';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LocationComponent,
    MailComponent,
    PhoneComponent,
    YoutubeComponent,
    FacebookComponent,
    InstagramComponent,
    twitterComponent,
  ],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public getYear: number = new Date().getFullYear();
  footerdocs = {
    about: [
      { label: 'About Us', link: '' },
      { label: 'Contact Us', link: '' },
    ],
    docs: [
      { label: 'FAQs', link: '' },
      { label: 'Terms and Conditions', link: '' },
      { label: 'Privacy Policies', link: '' },
      { label: 'Refund Policies', link: '' },
      { label: 'HSE Policies', link: '' },
      { label: 'List of Prohibited Items', link: '' },
      { label: 'Say No To Fraud', link: '' },
    ],
    services: [
      { label: 'Air Shipping', link: '' },
      { label: 'Ocean Shipping', link: '' },
      { label: 'Auto Shipping', link: '' },
      { label: 'Fast Export', link: '' },
      { label: 'Shopforme', link: '' },
    ],
    links: [
      { label: 'Blog', link: '' },
      { label: 'Export', link: '' },
      { label: 'Help', link: '' },
      { label: 'Get a Quote', link: '' },
    ],
    apps: [
      { label: 'Iphone', link: '' },
      { label: 'Android', link: '' },
    ],
  };
}

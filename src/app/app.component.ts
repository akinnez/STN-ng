import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { FooterComponent } from '../component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'STN';
}

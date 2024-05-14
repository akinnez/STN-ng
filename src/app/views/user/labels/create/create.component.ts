import { CardComponent } from '@/component/card/card.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CardComponent, RouterOutlet],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  title = 'Create a Label';
}

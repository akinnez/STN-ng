import { ButtonComponent } from '@/component/button/button.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-labels',
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  templateUrl: './labels.component.html',
  styleUrl: './labels.component.scss',
})
export class LabelsComponent {
  title = 'Labels';
}

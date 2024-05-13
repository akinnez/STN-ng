import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { CardComponent } from '../card/card.component';
import { CloseComponent } from '../Icons/close';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    CardComponent,
    CloseComponent,
    RouterModule,
  ],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Output() onClickClose: EventEmitter<any> = new EventEmitter();
  @Input() open?: boolean = false;
  @Input() closeWithLink?: string;
  @Input() container?: any;
  @Input() cardStyle?: string;

  private router = inject(Router);

  ngOnInit(): void {}

  onClose() {
    this.onClickClose.emit();
  }
}

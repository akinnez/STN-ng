import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardComponent],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Output() onClickClose: EventEmitter<any> = new EventEmitter();
  @Input() open?: boolean = false;
  @Input() container?: any;
  @Input() cardStyle?: string;

  ngOnInit(): void {}

  onClose() {
    this.onClickClose.emit();
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      (click)="clickButton($event)"
      class="{{
        styles
      }} border-2 border-[#15803d] font-semibold text-[#15803d] rounded-lg px-4 py-3 hover:bg-[#15803d] hover:text-[#ebeb0e80]"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Output() event: EventEmitter<any> = new EventEmitter();
  @Input() styles?: string;
  @Input() isLoading?: boolean | Observable<boolean> | any;
  @Input() icon?: string;
  @Input() text?: string;

  clickButton(value?: any) {
    this.event.emit(value);
  }
}

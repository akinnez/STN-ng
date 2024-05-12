// toast.component.ts
import { ToastService } from '@/component/services/toast/toast.service';
import { Component, Input, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  template: `
    @for(toast of toasts, track toast){
    <div class="toast bg-white text-black p-3 m-3">
      <div class="toast-message inline-block">{{ toast.message }}</div>
    </div>
    }
  `,
})
export class ToastComponent implements OnInit {
  @Input() toasts!: any[];
  @Input() duration: number = 1000;
  public toastService = inject(ToastService);

  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      this.toastService.dismiss(this.toasts[0]);
    }, this.duration);
  }
}

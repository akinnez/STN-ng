// toast.component.ts
import { ToastService } from '@/component/services/toast/toast.service';
import {
  Component,
  Input,
  OnInit,
  ViewContainerRef,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  template: `
    @for(toast of toasts; track toast){
    <div
      class="text-black/80 bg-slate-50 p-3 m-3 rounded-md md:w-1/3 lg:w-1/4 absolute z-50 right-0"
    >
      <span class="inline-block font-semibold">{{ toast.message }}</span>
    </div>
    }
  `,
})
export class ToastComponent implements OnInit {
  @Input() toasts!: any[];
  @Input() duration?: number = 3000;
  @Input() container!: ViewContainerRef;
  public toastService = inject(ToastService);

  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      this.toastService.dismiss(this.toasts[0]);
      this.container.clear();
    }, this.duration);
  }
}

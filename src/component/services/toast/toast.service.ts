// toast.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: any[] = [];

  show(message: string) {
    this.toasts.push({ message });
  }

  dismiss(toast: any) {
    this.toasts = this.toasts.filter((t) => t !== toast);
  }
}

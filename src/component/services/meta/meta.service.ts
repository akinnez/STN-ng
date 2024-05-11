import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private title = inject(Title);
  private meta = inject(Meta);

  updateMeta(title: string, data: Array<{ name: string; content: string }>) {
    this.title.setTitle(title);
    this.meta.updateTag({
      name: 'author',
      content: document.URL,
    });
    const subscribe = from(data).subscribe({
      next: (res) => {
        this.meta.updateTag({
          name: res.name,
          content: res.content,
        });
      },
    });
    subscribe.unsubscribe();
  }
}

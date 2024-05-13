import { ButtonComponent } from '@/component/button/button.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-join-success',
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  template: `
    <div>
      <h1
        class="text-3xl md:text-4xl font-bold italic my-5 text-[#15832e] text-center"
      >
        Congratulation !!!
      </h1>
      <p class="my-3 md:text-xl">
        You have successfully created an account with us
      </p>
      <p class="md:text-xl">Thank you and do have a nice shipment experience</p>
      <p class="md:text-xl text-[#15832e] font-semibold my-5">
        Do wish to continue
      </p>
      <div class="flex justify-end mt-5 md:mt-10 mb-5">
        <a routerLink="/auth/login">
          <app-button>Continue</app-button>
        </a>
      </div>
    </div>
  `,
})
export class JoinSuccessComponent {}

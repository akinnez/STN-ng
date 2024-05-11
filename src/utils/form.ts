import { FormControl } from '@angular/forms';

export interface formtype {
  controlName: string;
  validator: any;
  value: any;
}

export function form<q>(arr: formtype[]): q {
  const obj: any = {};
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    obj[element.controlName] = new FormControl(element.value, {
      nonNullable: true,
      validators: element.validator,
    });
  }
  return obj;
}

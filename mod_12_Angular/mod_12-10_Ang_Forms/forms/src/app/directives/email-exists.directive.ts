import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";

export function emailExistsValidator(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise<ValidationErrors | null>((resolve, reject) => {
    setTimeout(() => {
      resolve(null);
      // resolve({EmailExists: {value: control.value}})
    }, 3000)
  })
}

@Directive({
  selector: '[EmailExists]',
  providers: [
    {provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => EmailExistsDirective), multi: true}
  ]
})
export class EmailExistsDirective implements AsyncValidator {

  constructor() {
  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> {
    // return new Promise<ValidationErrors | null>((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(null);
        // resolve({EmailExists: {value: control.value}})
      // }, 3000)
    // })
    return emailExistsValidator(control);
  }
}

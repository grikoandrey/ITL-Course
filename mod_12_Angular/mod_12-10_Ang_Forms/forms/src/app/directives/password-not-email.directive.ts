import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

export function passwordNotEmailValidator(control: AbstractControl): ValidationErrors | null {
  const email = control.get('email');
  const password = control.get('password');
  return email && password && password.value === email.value ? {emailAsPassword: true} : null;
}

@Directive({
  selector: '[PasswordNotEmail]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: PasswordNotEmailDirective, multi: true}
  ]
})
export class PasswordNotEmailDirective implements Validator {

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    // const email = control.get('email');
    // const password = control.get('password');
    // return email && password && password.value === email.value ? {emailAsPassword: true} : null;
    return passwordNotEmailValidator(control);
  }
}

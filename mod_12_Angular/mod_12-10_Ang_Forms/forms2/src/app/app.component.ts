import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CustomValidators} from "./shared/custom-validators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  checkoutForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    email: ['', [Validators.email]],
    address: ['', [Validators.required, Validators.minLength(10)]],
    addressSecond: ['', [Validators.minLength(10)]],
    country: ['', [Validators.required]],
    state: ['', [Validators.required]],
    zip: ['', [Validators.required]],
    sameAddress: [false],
    saveInfo: [false],
    payment: this.fb.group({
      card: ['credit', Validators.required],
      cardName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      number: ['', [Validators.required, CustomValidators.creditCardNumberValidator]],
      // ,Validators.minLength(16),Validators.pattern('^[0-9]*$')
      exp: ['', [Validators.required, CustomValidators.expirationValidator]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]+$'),Validators.maxLength(3)]],
    })
  });


  get firstName() {
    return this.checkoutForm.get('firstName');
  }

  get lastName() {
    return this.checkoutForm.get('lastName');
  }

  get userName() {
    return this.checkoutForm.get('userName');
  }

  get email() {
    return this.checkoutForm.get('email');
  }

  get address() {
    return this.checkoutForm.get('address');
  }

  get addressSecond() {
    return this.checkoutForm.get('addressSecond');
  }

  get country() {
    return this.checkoutForm.get('country');
  }

  get state() {
    return this.checkoutForm.get('state');
  }

  get zip() {
    return this.checkoutForm.get('zip');
  }

  get paymentCardName() {
    return this.checkoutForm.get('payment')?.get('cardName');
  }

  get paymentNumber() {
    return this.checkoutForm.get('payment')?.get('number');
  }

  get paymentCardExp() {
    return this.checkoutForm.get('payment')?.get('exp');
  }

  get paymentCardCvv() {
    return this.checkoutForm.get('payment')?.get('cvv');
  }

  constructor(private fb: FormBuilder) { }

}

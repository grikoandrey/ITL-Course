import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {passwordValidator} from "../../directives/password-validator.directive";
import {passwordNotEmailValidator} from "../../directives/password-not-email.directive";
import {emailExistsValidator} from "../../directives/email-exists.directive";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: []
})
export class ReactiveFormComponent implements OnInit {

  signInForm = this.fb.group({
    email: ['',{
      validators: [Validators.required, Validators.email],
      asyncValidators: emailExistsValidator,
      updateOn: 'blur',
    }],
    password: ['', [Validators.required, passwordValidator('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]],
    rememberMe: [false],

  // signInForm = new FormGroup({
  //   email: new FormControl('', {
  //     validators: [Validators.required, Validators.email],
  //     asyncValidators: emailExistsValidator,
  //     updateOn: 'blur',
  //   }),
  //   // email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, passwordValidator('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]),
  //   rememberMe: new FormControl(false),
  }, {validators: passwordNotEmailValidator});

  // email = new FormControl('');
  // password = new FormControl('');
  // rememberMe = new FormControl(false);

  get email() {
    return this.signInForm.get('email');
  }

  get password() {
    return this.signInForm.get('password');
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    // this.signInForm.setValue({
    //   email: 'test@mail.com',
    //   password: 'test',
    //   rememberMe: false,}
    // );
    this.signInForm.patchValue({
        email: 'test@mail.com',
      }
    );
  }

  signIn() {
    console.log(this.signInForm.value);
    // console.log(this.email.value);
    // console.log(this.password.value);
    // console.log(this.rememberMe.value);
    this.signInForm.reset();
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isLogged = false;

  logIn() {
    this.isLogged = true;
  };

  logOut() {
    this.isLogged = false;
  };

  isLoggedIn() {
    return this.isLogged;
  }
}

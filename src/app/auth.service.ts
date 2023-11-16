import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  login(username: string, password: string): boolean {
    if (username === 'user' && password === 'password') {
      this.loggedIn = true;
      return true;
    }
    this.loggedIn = false;
    return false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
  }
}

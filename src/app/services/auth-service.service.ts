import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  public login(username = 'qwerty', password = 'qwerty') {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }

  public logout() {
    // localStorage.removeItem('username');
    // localStorage.removeItem('password');
    localStorage.clear();
  }

  public isAuthenticated() {
    return localStorage.getItem('username') != null;
  }

  public GetUserInfo() {
    return localStorage.getItem('username');
  }
}

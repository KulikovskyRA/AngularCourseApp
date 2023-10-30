import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  // @Output() public userDataEmit: EventEmitter<object> =
  //   new EventEmitter<object>();

  // @Output() public userLogoutEmit: EventEmitter<null> =
  //   new EventEmitter<null>();

  public login(username = 'qwerty', password = 'qwerty') {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    // //!
    // this.userDataEmit.emit({ username, password });
    // //!
  }

  public logout() {
    localStorage.clear();
    return this.isAuthenticated();
  }

  public isAuthenticated() {
    return localStorage.getItem('username') != null;
  }

  public GetUserInfo() {
    return localStorage.getItem('username');
  }
}

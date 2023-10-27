import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() public userDataEmit: EventEmitter<object> =
    new EventEmitter<object>();
  userData = { username: '', password: '' };

  setUserData(event: any) {
    this.userData = {
      ...this.userData,
      [event.target.name]: event.target.value,
    };
    // console.log(this.userData);
  }

  logUserData(): void {
    this.userDataEmit.emit(this.userData);
    // console.log('emit');
  }
}

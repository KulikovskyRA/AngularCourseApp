import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @Output() public userDataEmit: EventEmitter<object> =
    new EventEmitter<object>();
  userData = { username: '', password: '' };

  constructor(
    private router: Router,
    private readonly authService: AuthserviceService
  ) {}

  setUserData(event: any) {
    this.userData = {
      ...this.userData,
      [event.target.name]: event.target.value,
    };
  }

  logUserData(): void {
    this.authService.login(this.userData.username, this.userData.password);
    this.userDataEmit.emit(this.userData);
    this.router.navigateByUrl('/courses');
  }
}

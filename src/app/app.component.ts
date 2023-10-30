import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

import { AuthserviceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private readonly authService: AuthserviceService) {}

  public authStatus = this.authService.isAuthenticated();

  // // userLogin(event: any) {
  // //   const { username, password } = event;
  // //   this.authService.login(username, password);
  // //   this.authStatus = this.authService.isAuthenticated();
  // // }

  // userLogout() {
  //   // this.authService.logout();
  //   // this.authStatus = this.authService.isAuthenticated();

  // }
}

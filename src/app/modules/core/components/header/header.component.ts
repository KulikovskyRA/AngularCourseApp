import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // @Output() public userLogoutEmit: EventEmitter<null> =
  //   new EventEmitter<null>();

  public authStatus = this.authService.isAuthenticated();

  constructor(
    private router: Router,
    private readonly authService: AuthserviceService
  ) {}

  logUserLogout() {
    // this.userLogoutEmit.emit();
    this.authService.logout();
    this.authStatus = this.authService.isAuthenticated();
    this.router.navigateByUrl('/login');
  }

  // check() {
  //   this.authStatus = this.authService.isAuthenticated();
  //   console.log('efwefwf');
  // }
}

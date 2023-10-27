import { Component, EventEmitter, Output } from '@angular/core';
import { AuthserviceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() public userLogoutEmit: EventEmitter<null> =
    new EventEmitter<null>();

  constructor(private readonly authService: AuthserviceService) {}

  public authStatus = this.authService.isAuthenticated();

  logUserLogout() {
    this.userLogoutEmit.emit();
  }
}

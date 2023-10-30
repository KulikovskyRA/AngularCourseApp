import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AuthserviceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnChanges {
  @Output() public userLogoutEmit: EventEmitter<null> =
    new EventEmitter<null>();

  @Input() public authStatus: boolean =
    this.authService.isAuthenticated() as boolean;

  constructor(private readonly authService: AuthserviceService) {}

  ngOnChanges(_changes: SimpleChanges): void {
    this.authStatus = this.authService.isAuthenticated();
  }

  logUserLogout() {
    this.userLogoutEmit.emit();
    this.authStatus = this.authService.isAuthenticated();
  }
}

import { Component, OnInit } from '@angular/core';
import { ICourse } from './domain/course';
import { AuthserviceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly authService: AuthserviceService) {}

  public authStatus = this.authService.isAuthenticated();
}

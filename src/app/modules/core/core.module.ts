import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { CardModule } from 'primeng/card';

import '@angular/common/locales/global/ru';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    PasswordModule,
  ],
  exports: [HeaderComponent, FooterComponent, LoginFormComponent],
})
export class CoreModule {}

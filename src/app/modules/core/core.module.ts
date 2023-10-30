import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { TabMenuModule } from 'primeng/tabmenu';

import { CardModule } from 'primeng/card';

import '@angular/common/locales/global/ru';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    LoginFormComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    PasswordModule,
    TabMenuModule,
  ],
  exports: [HeaderComponent, FooterComponent, LoginFormComponent],
})
export class CoreModule {}

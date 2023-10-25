import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SectionComponent } from './components/section/section.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CoursecardComponent } from './components/coursecard/coursecard.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { CardModule } from 'primeng/card';
import { CreationDateCheckDirective } from './directives/creation-date-check.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    BreadcrumbsComponent,
    SectionComponent,
    CoursecardComponent,
    CourselistComponent,
    CreationDateCheckDirective,
  ],
  imports: [CommonModule, InputTextModule, ButtonModule, CardModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    SectionComponent,
    CourselistComponent,
  ],
})
export class CoreModule {}

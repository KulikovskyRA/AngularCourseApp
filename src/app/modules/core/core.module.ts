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

import '@angular/common/locales/global/ru';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';

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
    DurationPipe,
    OrderByPipe,
    FilterPipe,
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

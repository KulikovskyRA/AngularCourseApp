import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { BreadcrumbsComponent } from '../courses/components/breadcrumbs/breadcrumbs.component';
import { SectionComponent } from '../courses/components/section/section.component';

import { CoursecardComponent } from '../courses/components/coursecard/coursecard.component';
import { CourselistComponent } from '../courses/components/courselist/courselist.component';

import { CreationDateCheckDirective } from '../courses/directives/creation-date-check.directive';

import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
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

  exports: [BreadcrumbsComponent, SectionComponent, CourselistComponent],
})
export class CoursesModule {}

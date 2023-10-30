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
import { CardCreateComponent } from './components/card-create/card-create.component';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { CalendarModule } from 'primeng/calendar';
import { CoursesRoutingModule } from './courses-routing.module';
import { BodyComponent } from './components/body/body.component';

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
    CardCreateComponent,
    BodyComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    ConfirmDialogModule,
    FormsModule,
    InputTextareaModule,
    InputNumberModule,
    CalendarModule,
    CoursesRoutingModule,
  ],

  exports: [
    BreadcrumbsComponent,
    SectionComponent,
    CourselistComponent,
    CardCreateComponent,
  ],
})
export class CoursesModule {}

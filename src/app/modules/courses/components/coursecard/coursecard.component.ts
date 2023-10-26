import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from 'src/app/domain/course';
import { CoursesserviceService } from 'src/app/services/coursesservice.service';

import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-coursecard',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.scss'],
  providers: [ConfirmationService],
})
export class CoursecardComponent {
  constructor(
    private readonly coursesService: CoursesserviceService,
    private confirmationService: ConfirmationService
  ) {}

  @Input() public course: ICourse = {} as ICourse;
  @Output() public edit: EventEmitter<ICourse> = new EventEmitter<ICourse>();

  @Output() public delete: EventEmitter<ICourse> = new EventEmitter<ICourse>();

  public editCourse(): void {
    this.edit.emit(this.course);
  }

  public deleteConfirm(): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      // icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteCourse();
      },
      reject: () => {},
    });
  }

  public deleteCourse(): void {
    this.delete.emit(this.course);
  }
}

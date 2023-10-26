import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from 'src/app/domain/course';
import { CoursesserviceService } from 'src/app/services/coursesservice.service';

@Component({
  selector: 'app-coursecard',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.scss'],
})
export class CoursecardComponent {
  constructor(private readonly coursesService: CoursesserviceService) {}

  @Input() public course: ICourse = {} as ICourse;
  @Output() public edit: EventEmitter<ICourse> = new EventEmitter<ICourse>();

  @Output() public delete: EventEmitter<ICourse> = new EventEmitter<ICourse>();

  public editCourse(): void {
    this.edit.emit(this.course);
  }

  public deleteCourse(): void {
    this.delete.emit(this.course);
  }
}

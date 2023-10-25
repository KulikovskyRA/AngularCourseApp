import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from 'src/app/domain/course';

@Component({
  selector: 'app-coursecard',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.scss'],
})
export class CoursecardComponent {
  @Input() public course: ICourse = {} as ICourse;
  @Output() public edit: EventEmitter<ICourse> = new EventEmitter<ICourse>();

  public editCourse(): void {
    this.edit.emit(this.course);
  }
}

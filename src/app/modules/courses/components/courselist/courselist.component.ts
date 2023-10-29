import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/domain/course';

import { FilterPipe } from '../../pipes/filter.pipe';
import { CoursesserviceService } from 'src/app/services/courses-service.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.scss'],
  providers: [FilterPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourselistComponent implements OnInit {
  public courses: ICourse[] = [];

  constructor(
    private filter: FilterPipe,
    private readonly coursesService: CoursesserviceService
  ) {}

  ngOnInit(): void {
    this.courses = this.coursesService.getList();
    this.filteredCourses = this.courses;
  }

  public loadMore(): void {
    console.log('loadMore');
  }

  public editCourse(course: ICourse): void {
    console.log(course.id);
  }

  public deleteCourse(course: ICourse): void {
    this.courses = this.coursesService.removeItem(course.id);
    this.filteredCourses = this.filter.transform(this.courses, this.searchText);
  }

  public searchText = '';
  public filteredCourses: ICourse[] = [];

  onButtonSearchClicked(valueEmit: string) {
    this.searchText = valueEmit;
    console.log(this.searchText);

    this.filteredCourses = this.filter.transform(this.courses, this.searchText);

    console.log(this.filteredCourses);
  }
}

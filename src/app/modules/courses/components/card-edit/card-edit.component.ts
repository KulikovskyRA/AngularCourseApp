import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from 'src/app/domain/course';

import { CoursesserviceService } from 'src/app/services/courses-service.service';

@Component({
  selector: 'app-card-edit',
  templateUrl: './card-edit.component.html',
  styleUrls: ['./card-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardEditComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly coursesService: CoursesserviceService
  ) {}

  public id = Number(this.route.snapshot.params['id']);

  editCourse: ICourse = {
    id: 0,
    title: '',
    duration: 0,
    description: '',
    topRated: false,
    creationDate: new Date(),
  };

  ngOnInit(): void {
    this.editCourse =
      this.coursesService.getItemById(this.id) || this.editCourse;

    console.log(this.editCourse);
  }

  cancelCreation() {
    // console.log('CreationCancelled');
    this.router.navigateByUrl('/');
  }
  createCourse() {
    console.log('editCourse');
    console.log(this.editCourse);
    this.router.navigateByUrl('/');
  }
}

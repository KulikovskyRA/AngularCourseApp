import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICourse } from 'src/app/domain/course';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardCreateComponent {
  constructor(private router: Router) {}

  newCourse: ICourse = {
    id: 0,
    title: '',
    duration: 0,
    description: '',
    topRated: false,
    creationDate: new Date(),
  };

  cancelCreation() {
    // console.log('CreationCancelled');
    this.router.navigateByUrl('/');
  }
  createCourse() {
    console.log('createCourse');
    console.log(this.newCourse);
    this.router.navigateByUrl('/');
  }
}

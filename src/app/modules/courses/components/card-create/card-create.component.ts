import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICourse } from 'src/app/domain/course';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardCreateComponent {
  newCourse: ICourse = {
    id: 0,
    title: '',
    duration: 0,
    description: '',
    topRated: false,
    creationDate: new Date(),
  };

  cancelCreation() {
    console.log('CreationCancelled');
  }
  createCourse() {
    console.log('createCourse');
    console.log(this.newCourse);
  }
}

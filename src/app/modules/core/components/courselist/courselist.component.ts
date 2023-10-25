import { Component, OnInit } from '@angular/core';
import { ICourse } from 'src/app/domain/course';

import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.scss'],
  providers: [FilterPipe],
})
export class CourselistComponent implements OnInit {
  public courses: ICourse[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        title: 'aboba1',
        creationDate: new Date('1980-01-30T00:00:00.000Z'),
        //moment('1980-01-30T00:00:00.000Z').format('MM-DD-YYYY'),
        duration: 100,
        topRated: false,
        description:
          'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
      },
      {
        id: 2,
        topRated: true,
        title: 'aboba2',
        creationDate: new Date(),
        //moment(new Date()).format('MM-DD-YYYY'),
        duration: 5670,
        description:
          'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
      },

      {
        id: 3,
        topRated: false,
        title: 'aboba3',
        creationDate: new Date('2023-11-30T00:00:00.000Z'),
        // moment('2023-11-30T00:00:00.000Z').format('MM-DD-YYYY'),
        duration: 340,
        description:
          'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
      },
      // {
      //   id: 4,
      //   title: 'Aboba4',
      //   creationDate: '2023-01-02T00:00:00.000Z',
      //   duration: 10,
      //   description:
      //     'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
      // },
      // {
      //   id: 5,
      //   title: 'Aboba5',
      //   creationDate: '2023-05-22T00:00:00.000Z',
      //   duration: 10,
      //   description:
      //     'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
      // },
      // {
      //   id: 6,
      //   title: 'Aboba6',
      //   creationDate: '2023-08-02T00:00:00.000Z',
      //   duration: 10,
      //   description:
      //     'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
      // },
      // {
      //   id: 7,
      //   title: 'Aboba7',
      //   creationDate: '2023-09-02T00:00:00.000Z',
      //   duration: 10,
      //   description:
      //     'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
      // },
      // {
      //   id: 8,
      //   title: 'Aboba8',
      //   creationDate: '2023-10-02T00:00:00.000Z',
      //   duration: 10,
      //   description:
      //     'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
      // },
      // {
      //   id: 9,
      //   title: 'Aboba9',
      //   creationDate: '2023-11-02T00:00:00.000Z',
      //   duration: 10,
      //   description:
      //     'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.',
      // },
    ];
    this.filteredCourses = this.courses;
  }

  public loadMore(): void {
    console.log('loadMore');
  }

  public editCourse(course: ICourse): void {
    console.log(course.id);
  }
  constructor(private filter: FilterPipe) {}

  public searchText = '';
  public filteredCourses: ICourse[] = [];

  onButtonSearchClicked(valueEmit: string) {
    this.searchText = valueEmit;
    console.log(this.searchText);

    this.filteredCourses = this.filter.transform(this.courses, this.searchText);

    console.log(this.filteredCourses);
  }
}

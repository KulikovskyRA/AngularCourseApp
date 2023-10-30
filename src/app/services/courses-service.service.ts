import { Injectable } from '@angular/core';
import { ICourse } from '../domain/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesserviceService {
  private courses: ICourse[] = [
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
  constructor() {}

  public getList(): ICourse[] {
    return this.courses;
  }

  public createCourse() {}

  public getItemById(id: number) {
    return this.courses.find((obj) => obj.id === id);
  }

  public updateItem() {}

  public removeItem(itemID: number) {
    this.courses = this.courses.filter((el) => el.id != itemID);
    return this.courses;
  }
}

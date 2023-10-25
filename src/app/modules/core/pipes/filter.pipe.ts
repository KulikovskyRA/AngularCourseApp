import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from 'src/app/domain/course';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: ICourse[], searchText: string) {
    if (!items) {
      return [];
    }

    if (!searchText || searchText === '') {
      return items;
    }

    return items.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}

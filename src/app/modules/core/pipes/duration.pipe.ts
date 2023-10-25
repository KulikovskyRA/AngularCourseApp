import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number) {
    const minutes = value % 60;
    const hours = Math.floor(value / 60);
    if (hours > 1 && hours < 5) {
      return `${hours} часа ${minutes} минут`;
    }
    if (hours > 5) {
      return `${hours} часоа ${minutes} минут`;
    }
    return `${minutes} минут`;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number) {
    const minutes = value % 60;
    const hours = Math.floor(value / 60);
    const lastHoursDigit = Number(String(hours).slice(-1));

    if (lastHoursDigit == 1 && hours != 11) {
      return `${hours} час ${minutes} минут`;
    }

    if (lastHoursDigit > 1 && lastHoursDigit < 5 && hours % 10 !== 1) {
      return `${hours} часа ${minutes} минут`;
    }

    if (lastHoursDigit >= 5) {
      return `${hours} часов ${minutes} минут`;
    }

    return `${minutes} минут`;
  }
}

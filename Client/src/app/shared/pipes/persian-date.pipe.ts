import { Pipe, PipeTransform } from '@angular/core';
import { DateFormat, ToPersian } from 'ara-persian-cal';
@Pipe({
  name: 'persianDate'
})
export class PersianDatePipe implements PipeTransform {

  transform(value: any, format: datePattern): any {
    if (value == '---')
      return value;

    let pattern: DateFormat = 'YYYY/MM/DD';
    switch (format) {
      case 'D':
        pattern = 'YYYY/MM/DD';
        break;
      case 'DT':
        pattern = 'YYYY/MM/DD HH:mm:ss';
        break;
      case 'DST':
        pattern = 'YYYY/MM/DD HH:mm';
        break;
      default:
        pattern = 'YYYY/MM/DD';
        break;
    }
    return ToPersian(value, pattern);
  }
}
type datePattern = 'D' | 'DT' | 'DST';

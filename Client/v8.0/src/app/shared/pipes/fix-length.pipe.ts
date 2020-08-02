import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fixLength' })
export class FixLengthPipe implements PipeTransform {
  transform(value: string, length: number, replacement: string = ''): string {
    let result = value == ('---' || '' || null || undefined) ? value : value.substr(0, length);
    return value.length > length ? result + replacement : result;
  }
}
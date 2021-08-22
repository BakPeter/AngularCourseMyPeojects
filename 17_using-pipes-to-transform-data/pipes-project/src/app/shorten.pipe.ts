import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shorten' })
export class ShortenPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    if (value.length > args[0]) {
      return args[1] + ' ' + value.substr(0, args[0]) + ' ...';
    }
    return args[1] + ' ' + value;
  }
  //   transform(value: any, limit: number, startChar: string = '') {
  //     if (value.length > limit) {
  //       return startChar + ' ' + value.substr(0, limit) + ' ...';
  //     }
  //     return startChar + ' ' + value;
  //   }
}

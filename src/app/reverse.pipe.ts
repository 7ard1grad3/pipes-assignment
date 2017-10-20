import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string | Array<any>): any {
    if (value.length > 1) {
      const reversedArray = [];
      let string = '';
      let n = 1;
      while (n <= value.length) {
        if (value instanceof Array) {
          reversedArray.push(value[value.length - n]);
        }else {
          string += value[value.length - n]; // Because string is an array of chars I'm running over elements from the end
        }
        n++;
      }
      if (reversedArray.length > 0) {
        return reversedArray;
      }else {
        return string;
      }
    }else {
      return value;
    }
  }

}

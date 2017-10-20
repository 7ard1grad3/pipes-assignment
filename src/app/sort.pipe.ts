import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, sortBy: string): any {
    if (value.length > 1) {
      value.sort(function (a, b) {
        if (a[sortBy] === b[sortBy]) {return 0; }
        if (a[sortBy] > b[sortBy]) {return 1; }
        if (a[sortBy] < b[sortBy]) {return -1; }
      });
      return value;
    }else {
      return value;
    }
  }

}

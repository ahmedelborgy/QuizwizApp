import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceStr'
})
export class SliceStrPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

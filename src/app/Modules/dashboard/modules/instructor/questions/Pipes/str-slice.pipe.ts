import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strSlice'
})
export class StrSlicePipe implements PipeTransform {

  transform(pname: string): String{
    return `${pname.split(' ').slice(0,2).join(' ')} ...`;
  }

}

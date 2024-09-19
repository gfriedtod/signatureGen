import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'titleCase',
  standalone: true
})
// title-case.pipe.ts

export class TitleCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;
    return value.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
  pure: false
})
export class FilterPipePipe implements PipeTransform {

  transform(value: { name: string }[], searchString: string): unknown {
    return value.filter(v => new RegExp(searchString ?? '.*', 'ig').test(v.name));
  }

}

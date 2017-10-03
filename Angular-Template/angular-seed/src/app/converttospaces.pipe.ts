import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converttospaces'
})
export class ConverttospacesPipe implements PipeTransform {

  transform(value: string, character: string): any {
    return value.replace(character, ' ');
  }

}

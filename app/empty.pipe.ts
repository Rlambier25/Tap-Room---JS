import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
  name: "empty",
  pure: false
})
export class EmptyPipe implements PipeTransform {
  transform(input: Keg[], args) {
    return input.filter(function(keg) {
      if (keg.pints <= 10) {
        return keg;
      }
    });
  }
}

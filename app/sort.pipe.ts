import { Pipe, PipeTransform } from 'angular2/core';
import { Keg } from './keg.model';

@Pipe({
    name: "sort",
    pure: false
})
export class SortPipe implements PipeTransform {
    transform(input: Keg[], args) {
        return input.sort(function(a, b) {
            return a.pints - b.pints;
        });
    }
}

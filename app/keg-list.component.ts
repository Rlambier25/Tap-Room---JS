import { Component, EventEmitter } from 'angular2/core';
import { KegDisplayComponent } from './keg-display.component';
import { NewKegComponent } from './new-keg.component';
import { SortPipe } from './sort.pipe';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  pipes: [SortPipe],
  directives: [KegDisplayComponent, NewKegComponent],
  template: `
    <new-keg (onSubmitNewKeg)="addKeg($event)"></new-keg>
    <keg-display *ngFor="#currentKeg of kegList | sort"
    [keg]="currentKeg"
    [class.green]="currentKeg.pints >= 90"
    [class.yellow]="currentKeg.pints < 90 && currentKeg.pints >= 30"
    [class.red]="currentKeg.pints < 30"
    [class.special]="currentKeg.price > 200">
    </keg-display>
  `
})
export class KegListComponent {
  public kegList: Keg[];
  addKeg(newKeg: Keg) {
  console.log(this.kegList);
    this.kegList.push(newKeg);
  }
}

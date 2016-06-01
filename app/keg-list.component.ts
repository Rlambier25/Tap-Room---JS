import { Component, EventEmitter } from 'angular2/core';
import { KegDisplayComponent } from './keg-display.component';
import { SortPipe } from './sort.pipe';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  pipes: [SortPipe],
  directives: [KegDisplayComponent],
  template: `
    <keg-display *ngFor="#currentKeg of kegList | sort"
    [keg]="currentKeg">
    </keg-display>
  `
})
export class KegListComponent {
  public keglist: Keg;
}

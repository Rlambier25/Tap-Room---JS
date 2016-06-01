import { Component } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template: `
    <div class="container">
      <h1>KEGS</h1>
      <keg-list [kegList]="kegs"></keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor() {
    this.kegs = [
      new Keg("name1", "brand1", 100, .05),
      new Keg("name2", "brand1", 90, .04),
      new Keg("name3", "brand2", 120, .06),
      new Keg("name4", "brand3", 150, .08)
    ];
  }
}

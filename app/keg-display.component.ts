import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
      <div>
        <h2>{{keg.name}}</h2>
        <p>Brand: {{keg.brand}}</p>
        <p>Price: {{keg.priceString}}</p>
        <p>ABV: {{keg.abv}}</p>
        <p>Remaining Pints: {{keg.pints}}</p>
        <button (click)="sell()" class="btn btn-default">Sell 1 Pint</button>
      </div>
  `
})
export class KegDisplayComponent {
  public keg: Keg;
  sell(): void {
    this.keg.pints --;
  }
}

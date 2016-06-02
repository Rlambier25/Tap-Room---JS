import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
      <div *ngIf="!edit && keg.pints > 0">
        <h2>{{keg.name}}</h2>
        <p>Brand: {{keg.brand}}</p>
        <p>Price: {{keg.priceString}}</p>
        <p>ABV: {{keg.abv}}</p>
        <p>Remaining Pints: {{keg.pints}}</p>
        <button (click)="sell(1)" class="btn btn-default">Sell Pint</button>
        <button (click)="sell(4)" class="btn btn-default">Sell Pitcher</button>
        <button (click)="toggleEdit()" class="btn btn-info">Edit</button>
      </div>
      <div *ngIf="edit && keg.pints > 0" class="keg-edit">
        <h2>Name: <input [(ngModel)]="keg.name" type="text" class="form-control"></h2>
        <p>Brand: <input [(ngModel)]="keg.brand" type="text" class="form-control"></p>
        <p>Price: <input [(ngModel)]="keg.price" type="number" class="form-control"></p>
        <p>ABV: <input [(ngModel)]="keg.abv" type="number" class="form-control"></p>
        <p>Remaining Pints: <input [(ngModel)]="keg.pints" type="number" class="form-control"></p>
        <button (click)="toggleEdit()" class="btn btn-info">Done</button>
      </div>
      <div *ngIf="keg.pints <= 0" class="sold-out">
        <h2>{{keg.name}}</h2>
        <p>Brand: {{keg.brand}}</p>
        <p>Price: {{keg.priceString}}</p>
        <p>ABV: {{keg.abv}}</p>
        <p>Remaining Pints: {{keg.pints}}</p>
        <button (click)="refill()">Buy More</button>
      </div>
  `
})
export class KegDisplayComponent {
  public keg: Keg;
  public edit: boolean = false;
  sell(p): void {
    this.keg.pints -= p;
  }
  toggleEdit() {
    this.edit = !this.edit;
    this.keg.priceToString();
  }
  refill(): void {
    this.keg.pints = 124;
  }
}

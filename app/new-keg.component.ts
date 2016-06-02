import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
    <button *ngIf="!formOpen" (click)="toggleForm()" class="btn btn-info">Add New Keg</button>
    <div *ngIf="formOpen">
      <h2>New Keg</h2>
        <p>Name: <input type="text" class="form-control" #name></p>
        <p>Brand: <input type="text" class="form-control" #brand></p>
        <p>Price: <input type="number" class="form-control" #price></p>
        <p>ABV: <input type="number" class="form-control" #abv></p>
        <button (click)="addKeg(name, brand, price, abv)" class="btn btn-info">Add</button>
    </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  public formOpen: boolean = false;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(name: HTMLInputElement, brand: HTMLInputElement, price: HTMLInputElement, abv: HTMLInputElement){
    var newKeg: Keg = new Keg(name.value, brand.value, parseFloat(price.value), parseFloat(abv.value));
    this.onSubmitNewKeg.emit(newKeg);
    name.value = "";
    brand.value = "";
    price.value = "";
    abv.value = "";
    this.toggleForm()
  }
  toggleForm() {
    this.formOpen = !this.formOpen
  }
}

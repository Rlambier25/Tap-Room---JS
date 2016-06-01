export class Keg {
  public pints: number = 124;
  public priceString: string;
  constructor(public name: string, public brand: string, public price: number, public abv: number) {
    this.priceString = "$" + this.price.toFixed(2).toString();
  }
}

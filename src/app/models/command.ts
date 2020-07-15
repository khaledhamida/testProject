import { Product } from './product';

export class Command {
  constructor(
    
  ) { }

  public id: string;
  public date: string;
  public product: Product;
  public Qntity : number;
  public amountLC(): number {
    console.log(this.product.priceUnity);
      console.log(this.Qntity);
    return this.product.priceUnity * this.Qntity;
  }
}
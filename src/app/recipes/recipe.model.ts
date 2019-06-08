import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public imagePath: string;
  public holdlevel: number;
  public scent: string;
  public price:number;
  public ingredients: Ingredient[];

  constructor(name: string, 
    imagePath: string,
    holdlvl:number, 
    scent:string,
    price:number, 
    ingredients: Ingredient[]) {
    this.name = name;
    this.imagePath = imagePath;
    this.holdlevel = holdlvl;
    this.scent=scent;
    this.price=price;
    this.ingredients = ingredients;
  }
}

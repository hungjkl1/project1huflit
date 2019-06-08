import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();

  private recipes: Recipe[] = [
    // new Recipe(
    //   'Grim Grease Heavy',
    //   'https://scontent.fsgn2-3.fna.fbcdn.net/v/t45.5328-0/s552x414/16175470_1334284036609709_9049957200360898560_n.jpg?_nc_cat=108&_nc_oc=AQl3RwtscmHb2JvnqnSZJUk4WHf6X2G6o-bdSzVY1nqsQht8IU68XtjYKDOt6f9EBjM&_nc_ht=scontent.fsgn2-3.fna&oh=66d1753658b3a6fd859d36d5fdf3b2d5&oe=5D9F19DB',
    //   10,
    //   'Barber Shop / Bay Rum',
    //   450000,
    //   [],
    //   )
  ];
  constructor(private httpClient: HttpClient, private slService: ShoppingListService) {
    this.httpClient.get("https://da-b1d.firebaseio.com/recipe.json")
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
        this.setRecipes(this.recipes);
      })
  }
  getRecipes() {
    return this.recipes.slice();

  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes
    this.recipesChanged.emit(this.recipes.slice());
  }

  getRecipe(index: number) {
    return this.recipes[index];

  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.emit(this.recipes.slice());
    this.httpClient.put("https://da-b1d.firebaseio.com/recipe.json",this.getRecipes())
    .subscribe(Response=>console.log("response"+Response))
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.emit(this.recipes.slice());
    
    this.httpClient.put("https://da-b1d.firebaseio.com/recipe.json",this.getRecipes())
    .subscribe(Response=>console.log("response"+Response))
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.emit(this.recipes.slice());
    this.httpClient.put("https://da-b1d.firebaseio.com/recipe.json",this.getRecipes())
    .subscribe(Response=>console.log("response"+Response))
  }
}

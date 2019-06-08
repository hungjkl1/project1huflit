import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { RecipeService } from 'app/recipes/recipe.service';
import { Recipe } from 'app/recipes/recipe.model';
@Injectable()
export class DatatstorageService {

  constructor(private httpClient:HttpClient,private recipeService:RecipeService) { }

  saveDataToDataFireBase(){
    this.httpClient.put("https://da-b1d.firebaseio.com/recipe.json",this.recipeService.getRecipes())
    .subscribe(Response=>console.log("response"+Response))
  }
  getDataFromFireBase(){
    this.httpClient.get("https://da-b1d.firebaseio.com/recipe.json")
    .subscribe((recipes:Recipe[])=>{
      this.recipeService.setRecipes((recipes))
      console.log(recipes)
  })

  }
  ngOnInit():void {
    this.httpClient.get("https://da-b1d.firebaseio.com/recipe.json")
    .subscribe((recipes:Recipe[])=>{
      this.recipeService.setRecipes((recipes))
  })}

}

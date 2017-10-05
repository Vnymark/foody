import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Testing', 'http://alturl.com/6wiwp'),
    new Recipe('Another Test Recipe', 'Testing', 'http://alturl.com/6wiwp')
  ];

  getRecipes() {
    // Using slice to get a copy, instead of the actual array.
    return this.recipes.slice();
  }
}

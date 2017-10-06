import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'Schnitzel, served with french fries',
      'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.foodworks.com%2Fuploads%2Ftx_sschproductbase%2Fschweineschnitzel.png&f=1',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'Hamburger',
      'A simple hamburger with cheese.',
      'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F4d%2FCheeseburger.jpg&f=1',
      [
        new Ingredient('Bread', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Slice of cheese', 1),
        new Ingredient('Lettuce', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    // Using slice to get a copy, instead of the actual array.
    return this.recipes.slice();
  }
    // For child routing the recipes.
  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

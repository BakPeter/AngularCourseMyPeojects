import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe 1',
      'This is a simple test 1',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('meat', 2), new Ingredient('buns', 4)]
    ),
    new Recipe(
      'A test recipe 2',
      'This is a simple test 2',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
      [
        new Ingredient('water melon', 1),
        new Ingredient('chiken', 2.5),
        new Ingredient('souse', 10),
        new Ingredient('orange', 20),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}

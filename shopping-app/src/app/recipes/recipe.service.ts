import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe (
            'A Test Recipe', 
            'This is simply a test',
            'https://media-cdn.tripadvisor.com/media/photo-s/08/e7/4f/3d/photo0jpg.jpg', 
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe (
            'Another Test Recipe', 
            'This is simply a test',
            'https://images.ricardocuisine.com/services/recipes/1074x1074_969-background.jpg', 
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
      ];

      constructor(private slService: ShoppingListService) {

      }

      getRecipes() {
          return this.recipes.slice();
      }

      addIngredientToShoppingList(ingredient: Ingredient[]) {
          this.slService.addIngredients(ingredient);

      }
}
import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomamtos', 10)
      ];

      getIngredients() {
         return this.ingredients.slice();
      }
      
      addIngredient(Ingredient: Ingredient) {
          this.ingredients.push(Ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredient: Ingredient[]) {
          this.ingredients.push(...ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }
}
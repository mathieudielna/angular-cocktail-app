import { Ingredient } from "./ingredient.interface";
import { Cocktail } from './cocktail.interface';

export interface Recipe {
    cocktail: Cocktail;
    ingredient: Ingredient[];
    
}
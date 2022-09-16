import { Ingredient } from "./ingredient.interface";
import { Recipe } from "./recipe.interface";

export interface Cocktail {
    name: string;
    img?: string; //pas obligatoire
    description: string;
    recipe?: Recipe[];
    ingredients: Ingredient[];
}
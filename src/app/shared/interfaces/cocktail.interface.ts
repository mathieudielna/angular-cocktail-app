import { Ingredient } from "./ingredient.interface";
import { Recipe } from "./recipe.interface";

// ? => not mandatory
export interface Cocktail {
    _id? : string;
    name: string;
    img?: string; 
    description: string;
    recipe?: Recipe[];
    ingredients: Ingredient[];
}
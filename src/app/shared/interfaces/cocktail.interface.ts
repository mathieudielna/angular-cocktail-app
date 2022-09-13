import { Ingredient } from "./ingredient.interface";

export interface Cocktail {
    name: String;
    img?: string; //pas obligatoire
    description: string;
    ingredients?: Ingredient[];
}
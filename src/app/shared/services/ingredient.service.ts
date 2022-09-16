import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from './../interfaces/ingredient.interface';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor() { }

//   public ingredient$: BehaviorSubject<Ingredient> = new BehaviorSubject([
//     {
//     name:"banana",
//     unite : "unit",
//     quantity: 160
//   },
//     {
//     name:"Rhum",
//     unite : "L",
//     quantity: 1
//   },
//     {
//     name:"Citron",
//     unite : "unit",
//     quantity: 1
//   },
// ])

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss']
})
export class CocktailFormComponent implements OnInit {
  public cocktailForm!: FormGroup;

  constructor(private formBuilder : FormBuilder) { }
  // name: string;
  // img?: string; //pas obligatoire
  // description: string;
  // recipe?: Recipe[];
  // ingredients: Ingredient[];

  ngOnInit(): void {
    this.cocktailForm = this.formBuilder.group({
      name: ['', Validators.required],
      img: ['', Validators.required],
      description: ['', Validators.required],
      recipe: ['default'],
      ingredient: [
        [{
          name : 'Vodka',
          unite: 'L',
          quantity:'0.2'
        },
      {
        name: 'Orange',
        unite: 'unite',
        quantity: '1.5'
      }]
      ]
    })
  }

  submit() {
    console.log(this.cocktailForm);

  }

}

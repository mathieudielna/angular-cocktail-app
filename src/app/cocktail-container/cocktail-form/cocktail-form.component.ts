import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Ingredient } from 'src/app/shared/interfaces/ingredient.interface';
import { CocktailService } from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss']
})
export class CocktailFormComponent implements OnInit {
  public cocktailForm: FormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      img: ['', [Validators.required]],
      description: ['', [Validators.required]],
      recipe: [''],
      ingredients: this.formBuilder.array([], [Validators.required]),
    });

  public get  ingredients() {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

  constructor(
    private formBuilder : FormBuilder,
    private cocktailService : CocktailService,
    private router : Router,
    private activatedRoute : ActivatedRoute
    ) { }

  // name: string;
  // img?: string; //pas obligatoire
  // description: string;
  // recipe?: Recipe[];
  // ingredients: Ingredient[];
  ngOnInit(): void {
    
  }

  // name: string;
  // unite?: string;
  // quantity: number;
  addIngredient():void {
    this.ingredients.push(this.formBuilder.group({
      name : ['',[ Validators.required]],
      quantity: ['',[ Validators.required]],
      unite: ['', [Validators.required]] ,
    }))
  }

  submit() {
    console.log(this.cocktailForm.value);
    this.cocktailService.addCocktail(this.cocktailForm.value);
    this.router.navigate(['..'], {relativeTo: this.activatedRoute})
  }

}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Ingredient } from 'src/app/shared/interfaces/ingredient.interface';
import { CocktailService } from '../../shared/services/cocktail.service';
import { Cocktail } from './../../shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss']
})
export class CocktailFormComponent implements OnInit {
  // declare form 
  public cocktailForm: FormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      img: ['', [Validators.required]],
      description: ['', [Validators.required]],
      recipe: [''],
      ingredients: this.formBuilder.array([], [Validators.required]),
    });
    public cocktail?: Cocktail;
  // get ingredients
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
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const index = paramMap.get("index");
      if(index !== null) {
        this.cocktail = this.cocktailService.getCocktail(+index);
      }
      this.initForm(this.cocktail); 
    ;
    })
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
    if(!this.cocktail){
      //create 
      //console.log(this.cocktailForm.value);
      this.cocktailService.addCocktail(this.cocktailForm.value);
      this.router.navigate(['..'], {relativeTo: this.activatedRoute})
    } else {
      // edit
      this.cocktailService.editCocktail(this.cocktailForm.value);
      this.router.navigate(['..'], {relativeTo: this.activatedRoute})
    }
  }

  private initForm(
    cocktail : Cocktail = { name : '', img : '', description: '', recipe : [], ingredients: [], }) {
    if (!cocktail) {
    this.cocktailForm = this.formBuilder.group({
          name: ['', [Validators.required]],
          img: ['', [Validators.required]],
          description: ['', [Validators.required]],
          recipe: [],
          ingredients: this.formBuilder.array([], [Validators.required]),
        });
      } else {
        //console.log("[Cocktail] :" + cocktail);
        this.cocktailForm = this.formBuilder.group({
          name: [cocktail.name, [Validators.required]],
          img: [cocktail.img, [Validators.required]],
          description: [cocktail.description, [Validators.required]],
          recipe: [[cocktail.recipe]],
          ingredients: this.formBuilder.array(cocktail.ingredients.map( ingredient => 
            this.formBuilder.group({          
            name : [ingredient.name,[ Validators.required]],
            quantity: [ingredient.quantity,[ Validators.required]],
            unite: [ingredient.unite, [Validators.required]] ,
            })), [Validators.required]),
        });
      }
  }

}

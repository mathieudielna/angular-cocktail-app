import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { first } from 'rxjs';
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
  public cocktail?: Cocktail;
  public cocktailForm: FormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      img: ['', [Validators.required]],
      description: ['', [Validators.required]],
      recipe: [''],
      ingredients: this.formBuilder.array([], [Validators.required]),
    });

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
      const index = paramMap.get('index');
      if(index !== null) {
        this.cocktailService
        .getCocktail(Number(index))
        .subscribe((cocktail : Cocktail) =>{
        this.cocktail = cocktail;
        this.initForm(this.cocktail);
        });
      //this.initForm(this.cocktailForm.value);
      }
      //this.initForm();
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
      this.cocktailService.addCocktail(this.cocktailForm.value).subscribe();
      this.router.navigate(['..'], {relativeTo: this.activatedRoute});
    } else {
      // edit
      console.log(this.cocktail._id);
      this.cocktailService.editCocktail(this.cocktail._id,this.cocktailForm.value).subscribe();
      this.router.navigate(['..'], {relativeTo: this.activatedRoute});
    }
  }

  private initForm(cocktail : Cocktail = { name : '', img : '', description: '', recipe : [], ingredients: [], }) {
    if (!cocktail) {
      //console.log("[No infosocktail] :" + cocktail);
    return this.cocktailForm = this.formBuilder.group({
          name: ['', [Validators.required]],
          img: ['', [Validators.required]],
          description: ['', [Validators.required]],
          recipe: [],
          ingredients: this.formBuilder.array([], [Validators.required]),
        });
      } else {
        //console.log("[Yes infos Cocktail] :" + cocktail.name);
        return this.cocktailForm = this.formBuilder.group({
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

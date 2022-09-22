import { Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { CocktailContainerComponent } from "./cocktail-container/cocktail-container.component";
import { IngredientsComponent } from "./ingredients/ingredients.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { UserComponent } from './user/user.component';
import { CartContainerComponent } from './cart-container/cart-container.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';

export const  APP_ROUTES: Routes = [
    {path:'',component:CocktailContainerComponent, pathMatch:'full'},
    {path:'user',
    canActivate:[AuthGuard],
    //canActivateChild: [AuthGuard]
    component:UserComponent},
    {path: 'cocktail', component: CocktailContainerComponent,
    children: [
      {path: 'new', component: CocktailFormComponent},
      {path: ':index/edit', component: CocktailFormComponent},
      {path: ':index', component: CocktailDetailsComponent},
      {path: '', redirectTo: '0', pathMatch: 'full'},

    ]
  },
    {path:'ingredients',component:IngredientsComponent, children : [
      {path:'data/:id',component:RecipeComponent},
    ]},
  { path: 'cart', component: CartContainerComponent },
    {path:'recipes',component:RecipesComponent, children : [
      {path:'data/:id',component:RecipeComponent},
    ]},
    {path:'cart',component:CartContainerComponent},
    // {path:'**',component:NotFoundComponent},
    // {path:'**',redirectTo:''},
  ]

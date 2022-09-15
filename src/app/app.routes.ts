import { Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { CocktailContainerComponent } from "./cocktail-container/cocktail-container.component";
import { IngredientsComponent } from "./ingredients/ingredients.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { UserComponent } from './user/user.component';

export const  APP_ROUTES: Routes = [
    {path:'',component:CocktailContainerComponent},
    {path:'user',
    canActivate:[AuthGuard],
    //canActivateChild: [AuthGuard]
    component:UserComponent},
    {path:'ingredients',component:IngredientsComponent, children : [
      {path:'data/:id',component:RecipeComponent},
    ]},
    {path:'recipes',component:RecipesComponent, children : [
      {path:'data/:id',component:RecipeComponent},
    ]},
    {path:'**',component:NotFoundComponent},
    // {path:'**',redirectTo:''},
  ]
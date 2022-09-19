import { Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { CocktailContainerComponent } from "./cocktail-container/cocktail-container.component";
import { IngredientsComponent } from "./ingredients/ingredients.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { UserComponent } from './user/user.component';
import { CartContainerComponent } from './cart-container/cart-container.component';

export const  APP_ROUTES: Routes = [
    {path:'',component:CocktailContainerComponent, pathMatch:'full'},
    {path:'user',
    canActivate:[AuthGuard],
    //canActivateChild: [AuthGuard]
    component:UserComponent},
    {path:'ingredients',component:IngredientsComponent, children : [
      {path:'data/:id',component:RecipeComponent},
    ]},
  { path: 'cart', component: CartContainerComponent },
    {path:'recipes',component:RecipesComponent, children : [
      {path:'data/:id',component:RecipeComponent},
    ]},
    {path:'cart',component:CartContainerComponent},
    {path:'**',component:NotFoundComponent},
    // {path:'**',redirectTo:''},
  ]

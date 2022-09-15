import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecipeComponent } from './recipe/recipe.component';
import { Route, RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  {path:'',component:CocktailContainerComponent},
  {path:'ingredient',component:IngredientComponent},
  {path:'recipe',component:RecipeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    IngredientComponent,
    RecipeComponent,
  ],
  imports: [
  BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

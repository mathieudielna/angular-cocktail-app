import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RecipeComponent } from './recipe/recipe.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { APP_ROUTES } from './app.routes'
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartContainerComponent } from './cart-container/cart-container.component';
import { IngredientListComponent } from './cart-container/ingredient-list/ingredient-list.component';
import { HeaderComponent } from './components/header/header.component';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';
import { FilterPipe } from './shared/pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    CocktailContainerComponent,
    IngredientComponent,
    IngredientsComponent,
    RecipeComponent,
    RecipesComponent,
    NotFoundComponent,
    UserComponent,
    CartContainerComponent,
    IngredientListComponent,
    CocktailFormComponent,
    FilterPipe

  ],
  imports: [
BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

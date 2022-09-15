import { Cocktail } from '../shared/interfaces/cocktail.interface';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CocktailService } from '../shared/services/cocktail.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss']
})
export class CocktailContainerComponent implements OnInit, OnDestroy {
  // constructor
  constructor(private cocktailService: CocktailService) { };
  
  // init 
  public cocktails: Cocktail[] = [];
  public selectedCocktail: Cocktail = this.cocktails[0];
  public subscription: Subscription = new Subscription(); 
  
  // function
  // public selectCocktail(index: number): void {
  //   this.selectedCocktail = this.cocktails[index];
  // }
  public selectCocktail(index: number): void {
    this.cocktailService.selectCocktail(index);
  }

  // on init 
  ngOnInit(): void {
    // use add to don't crush data
    this.subscription.add(
      this.cocktailService.cocktails$.subscribe(
        (cocktails: Cocktail[]) => {
          this.cocktails = cocktails;
        }
      )
    );

    this.subscription.add(
      this.cocktailService.selectedCocktail$.subscribe(
        (selectedCocktail: Cocktail) => {
          this.selectedCocktail = selectedCocktail;
        }
      )
    );
  }

  // on destroy 
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


 
}

import { Cocktail } from '../shared/interfaces/cocktail.interface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CocktailService } from '../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss']
})
export class CocktailContainerComponent implements OnInit {

  public cocktails: Cocktail[] = [];
  public selectedCocktail: Cocktail = this.cocktails[0];

  public selectCocktail(index: number): void {
    this.selectedCocktail = this.cocktails[index];
  }

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
  }

}

import { Cocktail } from '../../shared/interfaces/cocktail.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CocktailService } from 'src/app/shared/services/cocktail.service';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  // List des cocktails envoyé par le container 
  @Input()
  public cocktails?: Cocktail[];

  // cocktail selectionner par user 
  @Output() private changeCocktail: EventEmitter<number> = new EventEmitter<number>();

  constructor(private cocktailService: CocktailService) { }

  // public selectCocktail(index: number): void {
  //   this.changeCocktail.emit(index);
  // }
  
  public selectCocktail(index: number): void {
    this.cocktailService.selectCocktail(index);
  }
  

  ngOnInit(): void {
  }

}

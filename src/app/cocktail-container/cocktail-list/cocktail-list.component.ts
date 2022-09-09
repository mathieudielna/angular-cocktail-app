import { Cocktail } from './../../interfaces/cocktail.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


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

  public selectCocktail(index: number): void {
    this.changeCocktail.emit(index);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

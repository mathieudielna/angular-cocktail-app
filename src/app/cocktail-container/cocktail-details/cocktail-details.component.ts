import { Cocktail } from '../../shared/interfaces/cocktail.interface';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CartService } from './../../shared/services/cart.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CocktailService } from 'src/app/shared/services/cocktail.service';


@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  // @Input() public selectedCocktail!: Cocktail;
  public selectedCocktail!: Cocktail;
  private index?: string | null ;

  constructor(
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private cocktailService : CocktailService
    ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((ParamMap: ParamMap) => {
      this.index =  ParamMap.get('index');
      console.log(this.index);
      this.selectedCocktail = this.cocktailService.getCocktail(+this.index!);
    })
  }

  public addToCart(): void {
    this.cartService.addToCart(this.selectedCocktail.ingredients)
  }

}

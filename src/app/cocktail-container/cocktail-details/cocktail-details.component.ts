import { Cocktail } from '../../shared/interfaces/cocktail.interface';
import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { CartService } from './../../shared/services/cart.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit, OnDestroy {
  // @Input() public selectedCocktail!: Cocktail;
  public selectedCocktail!: Cocktail;
  public subscription?: Subscription;

  constructor(
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private cocktailService : CocktailService
    ) {}

  public addToCart(): void {
    this.cartService.addToCart(this.selectedCocktail.ingredients)
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }
      // console.log(this.index);
      this.subscription = this.cocktailService
      .getCocktail(+paramMap.get('index')!).subscribe((cocktail : Cocktail) => {
        this.selectedCocktail = cocktail;
      });

    })
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe()
  }



}

import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { CartService } from './../shared/services/cart.service';
import { Ingredient } from './../shared/interfaces/ingredient.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss']
})
export class CartContainerComponent implements OnInit, OnDestroy {
  @Output() public ingredients: Ingredient[] | null = null;
  
  public subscription: Subscription = new Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscription = this.cartService.ingredients$.subscribe(
      (ingredients: Ingredient[] | null): void => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

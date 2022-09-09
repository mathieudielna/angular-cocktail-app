import { Component } from '@angular/core';
import { Cocktail } from './interfaces/cocktail.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cocktail: Cocktail = {
    name: 'sexe on the beach',
    img: 'https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/CFF0C31F-1F4D-4655-85F7-2C6D669E0269/Derivates/DA29817C-241C-4DE0-AD2C-CFEA61D762FA.jpg',
    description: 'Sexe on the beach...',
  }

  
  public showInfoCocktail(c: Cocktail) {
    console.log(c);
    this.cocktail = c;
  }
  
}


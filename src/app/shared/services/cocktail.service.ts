import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap, Observable, filter, map, first } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail.interface';



@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http : HttpClient) { 
    //init cocktails
    //this.seed();
  }

  public cocktails$: BehaviorSubject<any> = new BehaviorSubject(null);
  
  public getCocktail(index: number): Observable<Cocktail> {
    return this.cocktails$.pipe(
      filter((cocktails: Cocktail[]) => cocktails !== null),
      first(),
      map((cocktails: Cocktail[])=> {
        return cocktails[index];
      })
    )
  }
  
  public addCocktail(cocktail: Cocktail):void {
    const value = this.cocktails$.value;
    this.cocktails$.next([...value, cocktail]);
  }

  public editCocktail(editedCocktail: Cocktail): void {
    const value = this.cocktails$.value;
    this.cocktails$.next(value.map((cocktail: Cocktail) => {
      if (cocktail.name === editedCocktail.name) {
        return editedCocktail;
      } else {
        return cocktail;
      }
    }))
  }

  public fetchCocktails(): Observable<any> {
    return this.http.get('https://www.restapi.fr/api/cocktails').pipe(
      tap((cocktails) => {
        this.cocktails$.next(cocktails);
      })
      )
    }
    
    // init API  
  // public seed() {
    //   this.http.post('https://www.restapi.fr/api/cocktails',[
      //   {
        //     name: "Mojito",
        //     img: "https://www.offcourses.net/9466-large_default/boisson-gazeuse-4-agrumes.jpg",
  //     description: "The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.",
  //     ingredients : [
    //       {
      //       name : 'Rhum',
  //       quantity : 0.25,
  //       unite : 'L'
  //     },
  //       {
    //       name : 'Citron',
    //       quantity : 0.25,
    //       unite : 'unit'
    //     },
    //       {
      //       name : 'Orange',
      //       quantity : 0.5,
  //       unite : 'unit'
  //     },
  //   ],
  //   },
  //   {
  //     name: "Cosmopolitan",
  //     img: "https://wordpress.potagercity.fr/wp-content/uploads/2019/06/Boisson-fra%C3%AEche-m%C3%BBre-citron.jpg",
  //     description: "The tangy concoction of vodka, triple sec, lime juice and cranberry juice has managed to leapfrog the venerable screwdriver as many vodka drinkers prefer the Cosmopolitan’s cleaner and slightly tart taste. The keys to the preparation of a Cosmopolitan are a good brand of cranberry juice and Cointreau Triple Sec, two essential elements to the drink.",
  //     ingredients : [
  //       {
    //         name : 'Vodka',
    //         quantity : 0.25,
    //         unite : 'L'
    //       },
    //         {
      //         name : 'Citron',
      //         quantity : 0.25,
      //         unite : 'unit'
      //       },
  //     ],
  //   },
  //   {
    //     name: "Mai Tai",
    //     img: "https://wordpress.potagercity.fr/wp-content/uploads/2019/06/Boisson-fra%C3%AEche-m%C3%BBre-citron.jpg",
    //     description: "The Mai Tai is a Polynesian-style cocktail that has a fruity tropical taste sweet and vibrant. The mixture of light and dark rum, orange curacao, orgeat syrup and lime juice has been a symbol of Tahitian culture ever since the drink was first created.",
    //     ingredients : [
      //       {
        //         name : 'Vodka',
  //         quantity : 0.25,
  //         unite : 'L'
  //       },
  //         {
    //         name : 'Coca',
    //         quantity : 0.55,
    //         unite : 'cl'
    //       },
    //     ],
    //   }
  //   ] ,).subscribe();
  // }
  
  // old code 
  // public selectedCocktail$: BehaviorSubject<any> = new BehaviorSubject(null);
  
  // public selectCocktail(index: number): void {
  //   this.selectedCocktail$.next(this.cocktails$.value[index]);
  // }
}

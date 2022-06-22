import { Injectable } from '@angular/core';
import { Heroes } from 'src/app/data/mock-heroes';
import { Hero } from 'src/app/interfaces/hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() { }

  getHeroes() : Observable<Hero[]> {
    const heroes = of(Heroes);
    return heroes;
  }
}

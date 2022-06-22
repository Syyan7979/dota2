import { Injectable } from '@angular/core';
import { Heroes } from 'src/app/data/mock-heroes';
import { Hero } from 'src/app/interfaces/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService : MessageService) { }

  getHeroes() : Observable<Hero[]> {
    const heroes = of(Heroes);
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  }

  getHero(id : number) : Observable<Hero> {
    const hero = Heroes.find(hero => hero.id === id)!;
    return of(hero);
  }
}

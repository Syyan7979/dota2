import { Injectable } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Player } from 'src/app/interfaces/player';
import { Matchup } from 'src/app/interfaces/matchup';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'https://api.opendota.com/api/heroStats';
  constructor(private http : HttpClient, private messageService : MessageService) { }

  getHeroes() : Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getPlayers(id : number) : Observable<Player[]> {
    return this.http.get<Player[]>(`https://api.opendota.com/api/heroes/${id}/players`)
  }

  getMatchups(id : number) : Observable<Matchup[]>{
    return this.http.get<Matchup[]>(`https://api.opendota.com/api/heroes/${id}/matchups`)
  }
}

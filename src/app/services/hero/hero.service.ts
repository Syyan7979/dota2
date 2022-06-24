import { Injectable } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'https://api.opendota.com/api/heroStats';
  constructor(private http : HttpClient, private messageService : MessageService) { }

  getHeroes() : Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }
}

import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero'
import { HeroService } from '../services/hero/hero.service';
import { MessageService } from '../services/message/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes : Hero[] = [];
  constructor(private heroService: HeroService, private messageService : MessageService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => this.heroes = heroes)
  }
}

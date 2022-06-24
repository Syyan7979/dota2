import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../interfaces/hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../services/hero/hero.service';

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.css']
})
export class HeroesDetailsComponent implements OnInit {

  @Input() hero? : Hero;
  constructor(
    private heroService : HeroService,
    private route : ActivatedRoute,
    private Location : Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero() : void {
    const id = Number(this.route.snapshot.paramMap.get('heroId'));
    this.heroService.getHeroes().subscribe(heroes => this.hero = heroes.find(hero => hero.id === id));
  }
}

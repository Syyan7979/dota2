import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero'
import { Heroes } from '../data/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = Heroes;
  selectedHero?: Hero;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
  }

}

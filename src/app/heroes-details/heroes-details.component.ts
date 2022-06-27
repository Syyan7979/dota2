import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { Player } from '../interfaces/player';
import { Matchup } from '../interfaces/matchup';
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
  @Input() hide : boolean = true;
  @Input() highestVal!: number;
  players : Player[] = [];
  matchUps : Matchup[] = [];
  heroes : Hero[] = [];
  playerCheck = 'not-selected';
  matchupCheck = 'selected';

  constructor(
    private heroService : HeroService,
    private route : ActivatedRoute,
    private Location : Location) { }

  ngOnInit(): void {
    this.getHero();
    this.getMatchups();
    this.getPlayers();
    this.getHeroes();
  }

  getHero() : void {
    const id = Number(this.route.snapshot.paramMap.get('heroId'));
    this.heroService.getHeroes().subscribe(heroes => this.hero = heroes.find(hero => hero.id === id));
  }

  getLastRole() : string | undefined {
    const role = this.hero? this.hero["roles"].slice(-1)[0] : undefined
    return role;
  }

  getPlayers() : void {
    const id = Number(this.route.snapshot.paramMap.get('heroId'));
    this.heroService.getPlayers(id).subscribe(players => this.players = players);
  }

  getMatchups() : void {
    const id = Number(this.route.snapshot.paramMap.get('heroId'));
    this.heroService.getMatchups(id).subscribe(matchups => this.matchUps = matchups);
  }

  clickButton() : void {
    this.hide = !this.hide;
  }

  clickMatchups() : void {
    this.matchupCheck = "selected";
    this.playerCheck = "not-selected";
  }

  clickPlayers() : void {
    this.matchupCheck = "not-selected";
    this.playerCheck = "selected";
  }

  getHeroes() : void {
    this.heroService.getHeroes().subscribe((heroes) => this.heroes = heroes)
  }

  getHeroName(id : number) : [string | undefined, string | undefined] {
    const name = this.heroes.find(hero => hero.id === id);
    return [name?.localized_name, name?.img];
  }

  calculatePercent(value : number) : string {
    return (100 * (value/this.matchUps[0].games_played)).toString() + '%';
  }

  calculatePercentPlayer(value : number) : string {
    return (100 * (value/this.players[0].games_played)).toString() + '%';
  }

  winRate(wins : number, total : number) : string {
    return (100 * (wins/total)).toString() + '%';
  }
}

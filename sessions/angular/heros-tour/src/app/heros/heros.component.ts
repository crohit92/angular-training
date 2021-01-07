import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { combineLatest, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

import { MessagesService } from '../core/services/messages.service';
import { Hero } from './hero';
import { HeroesService } from "./heroes.service";

export class Test { }

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss'],
  providers: [MessagesService, HeroesService]
})
export class HerosComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;
  constructor(heroService: HeroesService,
    public messagesService: MessagesService
  ) {
    heroService.getHeros().subscribe(heroes => {
      messagesService.add("Heros Fetched");
      this.heroes = heroes;
    });
  }

  ngOnInit(): void {
    console.log("Component Initialized");
  }

  onHeroSelected(hero: Hero) {
    this.selectedHero = hero;
    this.messagesService.add(`Hero ${hero.name} is selected`);
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { combineLatest, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hero } from './hero';
import { HeroesService } from "./heroes.service";
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;
  constructor(heroService: HeroesService) {
    heroService.getHeros().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  ngOnInit(): void {
    console.log("Component Initialized");
    // document.addEventListener("click", (ev) => {
    //   console.log(ev);
    // });
    // combineLatest([
    // fromEvent(document, "click"),
    fromEvent(document, "keydown")
      // ])
      .pipe(map(ev => (ev as any).keyCode * 2))
      .subscribe(char => {
        console.log(char);
      })
  }

  // onHeroNameChnage() {
  //   this.changeHeroName.next(this.hero.name);
  // }

}

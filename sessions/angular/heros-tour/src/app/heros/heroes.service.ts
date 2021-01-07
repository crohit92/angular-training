import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from "rxjs";

@Injectable()
export class HeroesService {

  HEROS = [
    {
      id: 3,
      name: "GDB"
    },
    {
      id: 2,
      name: "BED"
    },
    {
      id: 3,
      name: "CGF"
    },
    {
      id: 4,
      name: "GBE"
    },
    {
      id: 5,
      name: "HTJ"
    },
    {
      id: 6,
      name: "GHT"
    },
  ]
  constructor() {
    console.log("Initialted");
  }

  greet() {
    return "Hello";
  }

  getHeros(): Observable<Hero[]> {
    return of(this.HEROS)
  }

  getHero(id: number): Observable<Hero> {
    return of(this.HEROS.find(h => h.id === id));
  }
}

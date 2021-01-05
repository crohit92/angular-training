import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }

  greet() {
    return "Hello";
  }

  getHeros(): Observable<Hero[]> {
    return of([
      {
        id: 3,
        name: "GTTHH"
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
    ])
  }
}

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of, from } from "rxjs";
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

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
  constructor(private http: HttpClient) {
    console.log("Initialted");
  }

  greet() {
    return "Hello";
  }

  getHeros(): Observable<Hero[]> {
    return this.http.get("https://api.github.com/users/joravkumar/repos").pipe(
      map((res: any[]) => res.map(repo => {
        return { id: repo.name, name: repo.name };
      }))
    )
    // return from(
    //   fetch("https://api.github.com/users/joravkumar/repos").then(res => res.json())
    // )
    //   .pipe(
    //     map(res => res.map(repo => {
    //       return { id: repo.name, name: repo.name };
    //     }))
    //   );
    // return of(this.HEROS)
  }

  getHero(id: string): Observable<Hero> {
    // return from(
    //   fetch(`https://api.github.com/repos/joravkumar/${id}`).then(res => res.json())
    // )
    return this.http.get(`https://api.github.com/repos/joravkumar/${id}`)
      .pipe(
        map((res: any) => ({ id: res.id, name: res.name }))
      );
  }
}

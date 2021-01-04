import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  heros: Hero[] = [
    {
      id: 1,
      name: "ABC"
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
  selectedHero: Hero;
  // @Input() hero: Hero;
  // @Output() changeHeroName = new EventEmitter<string>();
  constructor() {
  }

  // changeName() {
  //   this.hero.name = 'Jorav'
  // }
  ngOnInit(): void {
    console.log("Component Initialized");
  }

  // onHeroNameChnage() {
  //   this.changeHeroName.next(this.hero.name);
  // }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {


  @Input() hero: Hero;
  @Output() changeHeroName = new EventEmitter<string>();
  constructor() {
  }

  changeName() {
    this.hero.name = 'Jorav'
  }
  ngOnInit(): void {
  }

  onHeroNameChnage() {
    this.changeHeroName.next(this.hero.name);
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: [
    './hero.component.css',
    "./sample.scss"],
  encapsulation: ViewEncapsulation.Emulated,

})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

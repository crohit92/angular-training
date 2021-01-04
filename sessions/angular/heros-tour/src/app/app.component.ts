import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from "../environments/environment";
import { Hero } from './heros/hero';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {

  // envName = environment.name;
  // myHero: Hero = {
  //   id: 2,
  //   name: "Jorav"
  // };
  log(name: string) {
    console.log(name);
  }
}

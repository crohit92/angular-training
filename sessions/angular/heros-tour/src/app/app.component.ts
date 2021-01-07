import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from "../environments/environment";
import { Hero } from './heros/hero';
import { IForecast } from "./core/services/forecast/forecast.service.interface";
import { Forecast } from "./core/services/forecast/forecast.service";
import { ForecastMock } from "./core/services/forecast/forecast-mock.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {

  constructor() {

  }
  log(name: string) {
    console.log(name);
  }

}

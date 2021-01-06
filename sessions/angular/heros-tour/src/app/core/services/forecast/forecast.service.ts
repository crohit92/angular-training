import { IForecast } from "./forecast.service.interface";

export class Forecast implements IForecast {
  getForecast(sunsign: string, date: Date): string {
    // Make an API call to get the prediction
    return "Your day is going to be awesome!";
  }
}

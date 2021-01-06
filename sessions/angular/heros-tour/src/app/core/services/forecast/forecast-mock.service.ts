import { IForecast } from "./forecast.service.interface";

export class ForecastMock implements IForecast {
  getForecast(sunsign: string, date: Date): string {
    return "This is mock data";
  }

}

export interface IForecast {
  getForecast(sunsign: string, date: Date): string;
}

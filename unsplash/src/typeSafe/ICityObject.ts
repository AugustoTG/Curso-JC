export interface ICityObject {
  base: string;
  clouds: { all: number };
  cod: string;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: Date;
    sunset: Date;
    type: number;
  };
  timezone: Date;
  visibility: Date;
  weather: Array<any>;
  wind: any;
}

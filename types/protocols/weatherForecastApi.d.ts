type DailyWeather = {
  id: number;
  main: string;
  description: string;
};

type DailyForecast = {
  weatherDate: string;
  main: {
    temperature: number;
    feelsLike: number;
    tempMin: number;
    tempMax: number;
    humidity: number;
  };
  weather: DailyWeather;
  wind: {
    speed: number;
    direction: number;
  };
  visibility: number;
  probabilityOfPrecipitation: number;
};

type WeatherForecast = {
  city: {
    id: number;
    name: string;
    coord: {
      lon: number;
      lat: number;
    };
    country: string;
    population: number;
  };
  firstForecastForEachDay: DailyForecast[];
  dailyForecastsByDay: DailyForecast[][];
};

type ForecastApiResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: [
    {
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
        },
      ];
      clouds: {
        all: number;
      };
      wind: {
        speed: number;
        deg: number;
        gust: number;
      };
      visibility: number;
      pop: number;
      sys: {
        pod: string;
      };
      dt_txt: string;
    },
  ];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};

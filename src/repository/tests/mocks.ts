const cityApiResponse = [
  {
    name: 'Fortaleza',
    lat: -3.7304512,
    lon: -38.5217989,
    country: 'BR',
    state: 'Ceará',
  },
  {
    name: 'Fortaleza',
    lat: -29.70713945,
    lon: -51.566781886669744,
    country: 'BR',
    state: 'Rio Grande do Sul',
  },
  {
    name: 'Fortaleza',
    lat: -27.50585145,
    lon: -53.46245340483132,
    country: 'BR',
    state: 'Rio Grande do Sul',
  },
  {
    name: 'Fortaleza',
    lat: -20.5500002,
    lon: -48.5803385,
    country: 'BR',
    state: 'São Paulo',
  },
  {
    name: 'Fortaleza',
    lat: -22.2504427,
    lon: -45.6905055,
    country: 'BR',
    state: 'Minas Gerais',
  },
];

const geoCodingApiResponse: CityApiResponse[] = [
  {
    name: 'Fortaleza',
    local_names: {
      pl: 'Fortaleza',
      ko: '포르탈레자',
      eo: 'Fortalezo',
      de: 'Fortaleza',
      ce: 'Форталеза',
      pt: 'Fortaleza',
      hy: 'Ֆորտալեզա',
      oc: 'Fortaleza',
      no: 'Fortaleza',
      nl: 'Fortaleza',
      fr: 'Fortaleza',
      bg: 'Форталеза',
      he: 'פורטלזה',
      sv: 'Fortaleza',
      mn: 'Форталеза',
      en: 'Fortaleza',
      be: 'Фарталеза',
      sr: 'Форталеза',
      uk: 'Форталеза',
      kk: 'Форталеза',
      zh: '福塔莱萨',
      ru: 'Форталеза',
      ka: 'ფორტალეზა',
      el: 'Φορταλέζα',
      ar: 'فورتاليزا',
      tr: 'Fortaleza',
      th: 'ฟอร์ตาเลซา',
      tg: 'Форталеза',
      os: 'Форталезæ',
      la: 'Fortalaetia',
      mr: 'फोर्तालेझा',
      mk: 'Форталеза',
      bn: 'ফর্তালিজা',
      ja: 'フォルタレザ',
      es: 'Fortaleza',
      fa: 'فرتالیزا',
    },
    lat: -3.7304512,
    lon: -38.5217989,
    country: 'BR',
    state: 'Ceará',
  },
  {
    name: 'Fortaleza',
    lat: -29.70713945,
    lon: -51.566781886669744,
    country: 'BR',
    state: 'Rio Grande do Sul',
  },
  {
    name: 'Fortaleza',
    lat: -27.50585145,
    lon: -53.46245340483132,
    country: 'BR',
    state: 'Rio Grande do Sul',
  },
  {
    name: 'Fortaleza',
    lat: -20.5500002,
    lon: -48.5803385,
    country: 'BR',
    state: 'São Paulo',
  },
  {
    name: 'Fortaleza',
    lat: -22.2504427,
    lon: -45.6905055,
    country: 'BR',
    state: 'Minas Gerais',
  },
];

const forecastApiResponse: ForecastApiResponse = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1712005200,
      main: {
        temp: 29.98,
        feels_like: 36.98,
        temp_min: 27.05,
        temp_max: 29.98,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1008,
        humidity: 86,
        temp_kf: 2.93,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
        },
      ],
      clouds: {
        all: 20,
      },
      wind: {
        speed: 2.6,
        deg: 349,
        gust: 3.73,
      },
      visibility: 10000,
      pop: 0.09,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-04-01 21:00:00',
    },
  ],
  city: {
    id: 6320062,
    name: 'Fortaleza',
    coord: {
      lat: -3.7305,
      lon: -38.5218,
    },
    country: 'BR',
    population: 2447409,
    timezone: -10800,
    sunrise: 1711960533,
    sunset: 1712003985,
  },
};

const weatherForecastReturn: WeatherForecast = {
  city: {
    coord: { lat: -3.7305, lon: -38.5218 },
    country: 'BR',
    id: 6320062,
    name: 'Fortaleza',
    population: 2447409,
  },
  dailyForecastsByDay: [
    [
      {
        main: {
          feelsLike: 36.98,
          humidity: 86,
          tempMax: 29.98,
          tempMin: 27.05,
          temperature: 29.98,
        },
        probabilityOfPrecipitation: 0.09,
        visibility: 10000,
        weather: {
          description: 'few clouds',
          id: 801,
          main: 'Clouds',
        },
        weatherDate:
          'Mon Apr 01 2024 18:00:00 GMT-0300 (Brasilia Standard Time)',
        wind: { direction: 349, speed: 2.6 },
      },
    ],
  ],
  firstForecastForEachDay: [
    {
      main: {
        feelsLike: 36.98,
        humidity: 86,
        tempMax: 29.98,
        tempMin: 27.05,
        temperature: 29.98,
      },
      probabilityOfPrecipitation: 0.09,
      visibility: 10000,
      weather: {
        description: 'few clouds',
        id: 801,
        main: 'Clouds',
      },
      weatherDate: 'Mon Apr 01 2024 18:00:00 GMT-0300 (Brasilia Standard Time)',
      wind: { direction: 349, speed: 2.6 },
    },
  ],
};

export {
  weatherForecastReturn,
  forecastApiResponse,
  cityApiResponse,
  geoCodingApiResponse,
};

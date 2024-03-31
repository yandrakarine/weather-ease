import { OPEN_WEATHER_API_KEY, OPEN_WEATHER_BASE_URL } from '@env';
import { getDay } from 'date-fns';
import { OpenWeatherEndPoints, RESULTS_LIMIT } from './constants';

const getGeoCodingURI = (queryText: string) =>
  `${OPEN_WEATHER_BASE_URL}${OpenWeatherEndPoints.GeoCoding}q=${queryText}&limit=${RESULTS_LIMIT}&appid=${OPEN_WEATHER_API_KEY}`;

const getForecastURI = ({ lat, lon }: CityCoordinates) =>
  `${OPEN_WEATHER_BASE_URL}${OpenWeatherEndPoints.DailyForecast}lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric`;

const getCitiesFromGeoCodingApiResponse = (
  geoCodingApiResponse: CityApiResponse[],
): City[] =>
  geoCodingApiResponse.map(cityApiResponse => {
    delete cityApiResponse.local_names;

    return cityApiResponse;
  });

const getDailyForecastFromDailyForecastApiResponse = (
  dailyForecast: ForecastApiResponse['list'][number],
): DailyForecast => ({
  weatherDate: `${new Date(dailyForecast.dt * 1000)}`,
  main: {
    temperature: dailyForecast.main.temp,
    feelsLike: dailyForecast.main.feels_like,
    tempMin: dailyForecast.main.temp_min,
    tempMax: dailyForecast.main.temp_max,
    humidity: dailyForecast.main.humidity,
  },
  weather: dailyForecast.weather[0],
  wind: {
    speed: dailyForecast.wind.speed,
    direction: dailyForecast.wind.deg,
  },
  probabilityOfPrecipitation: dailyForecast.pop,
  visibility: dailyForecast.visibility,
});

const getForecastsByDays = (
  forecastApiResponseList: ForecastApiResponse['list'],
) => {
  const forecastsByDay: WeatherForecast['dailyForecastsByDay'] = [];
  let lastCheckedWeekDayIndex = null;

  for (const forecast of forecastApiResponseList) {
    const currentDayIndex = getDay(forecast.dt * 1000);
    const forecastToUse =
      getDailyForecastFromDailyForecastApiResponse(forecast);

    if (lastCheckedWeekDayIndex !== currentDayIndex) {
      lastCheckedWeekDayIndex = currentDayIndex;
      forecastsByDay.push([forecastToUse]);

      continue;
    }

    const lastDaysList = forecastsByDay[forecastsByDay.length - 1];
    lastDaysList.push(forecastToUse);
  }

  return forecastsByDay;
};

const getWeatherForecastFromForecastApiResponse = (
  forecastApiResponse: ForecastApiResponse,
): WeatherForecast => {
  const dailyForecastsByDay = getForecastsByDays(forecastApiResponse.list);
  const firstForecastForEachDay = dailyForecastsByDay.map(
    dailyForecastList => dailyForecastList[0],
  );
  return {
    city: {
      id: forecastApiResponse.city.id,
      coord: forecastApiResponse.city.coord,
      country: forecastApiResponse.city.country,
      name: forecastApiResponse.city.name,
      population: forecastApiResponse.city.population,
    },
    firstForecastForEachDay,
    dailyForecastsByDay,
  };
};

export {
  getCitiesFromGeoCodingApiResponse,
  getForecastURI,
  getGeoCodingURI,
  getWeatherForecastFromForecastApiResponse,
};

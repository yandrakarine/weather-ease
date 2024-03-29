import { OPEN_WEATHER_API_KEY, OPEN_WEATHER_BASE_URL } from '@env';
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

const getWeatherForecastFromForecastApiResponse = (
  forecastApiResponse: ForecastApiResponse,
): WeatherForecast => {
  return {
    city: {
      id: forecastApiResponse.city.id,
      coord: forecastApiResponse.city.coord,
      country: forecastApiResponse.city.country,
      name: forecastApiResponse.city.name,
      population: forecastApiResponse.city.population,
    },
    list: forecastApiResponse.list.map(dailyForecast => ({
      weatherDate: dailyForecast.dt_txt,
      main: {
        temperature: dailyForecast.main.temp,
        feelsLike: dailyForecast.main.feels_like,
        tempMin: dailyForecast.main.temp_min,
        tempMax: dailyForecast.main.temp_max,
        humidity: dailyForecast.main.humidity,
      },
      weather: dailyForecast.weather.map(dailyWeather => ({
        id: dailyWeather.id,
        description: dailyWeather.description,
        main: dailyWeather.main,
      })),
      wind: {
        speed: dailyForecast.wind.speed,
        direction: dailyForecast.wind.deg,
      },
      probabilityOfPrecipitation: dailyForecast.pop,
      visibility: dailyForecast.visibility,
    })),
  };
};

export {
  getGeoCodingURI,
  getWeatherForecastFromForecastApiResponse,
  getCitiesFromGeoCodingApiResponse,
  getForecastURI,
};

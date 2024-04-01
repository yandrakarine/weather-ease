import {
  getCitiesFromGeoCodingApiResponse,
  getWeatherForecastFromForecastApiResponse,
} from '../utils';
import {
  cityApiResponse,
  forecastApiResponse,
  geoCodingApiResponse,
  weatherForecastReturn,
} from './mocks';

describe('getCitiesFromGeoCodingApiResponse', () => {
  it('should return a response with type CityApiResponse without propety local_names', () => {
    const result = getCitiesFromGeoCodingApiResponse(geoCodingApiResponse);

    expect(result).toStrictEqual(cityApiResponse);
  });
});

describe('getWeatherForecastFromForecastApiResponse', () => {
  it('should return an list wich contains the weather forecast', () => {
    const result =
      getWeatherForecastFromForecastApiResponse(forecastApiResponse);

    expect(result).toStrictEqual(weatherForecastReturn);
  });
});

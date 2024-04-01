import { requestAdapter } from '../adapters/requestAdapter';
import { ServerError } from '../errors/serverError';
import {
  getForecastURI,
  getWeatherForecastFromForecastApiResponse,
} from '../utils';

const getWeatherForecast = async ({
  lat,
  lon,
}: CityCoordinates): Promise<WeatherForecast | null> => {
  const forecastUri = getForecastURI({
    lat,
    lon,
  });

  try {
    const response = await requestAdapter(forecastUri);

    if (response.status === 401) {
      console.log(
        '❌ Unauthorized, please check OPEN_WEATHER_API_KEY env variable.',
      );
    }

    return getWeatherForecastFromForecastApiResponse(
      response.data as ForecastApiResponse,
    );
  } catch (error) {
    throw new ServerError('❌ Error loading weather forecast.');
  }
};

export { getWeatherForecast };

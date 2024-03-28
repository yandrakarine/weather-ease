import { requestAdapter } from '../adapters/requestAdapter';
import { ServerError } from '../errors/serverError';
import {
  getForecastURI,
  getWeatherForecastFromForecastApiResponse,
} from '../utils';

const getWeatherForecast = async ({
  lat,
  lon,
}: {
  lat: City['lat'];
  lon: City['lon'];
}): Promise<WeatherForecast | null> => {
  const forecastUri = getForecastURI({
    lat,
    lon,
  });

  try {
    const response: ForecastApiResponse = await requestAdapter(forecastUri);

    return getWeatherForecastFromForecastApiResponse(response);
  } catch (error) {
    throw new ServerError('Error loading weather forecast.');
  }
};

export { getWeatherForecast };

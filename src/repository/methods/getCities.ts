import { requestAdapter } from '../adapters/requestAdapter';
import { ServerError } from '../errors/serverError';
import { getCitiesFromGeoCodingApiResponse, getGeoCodingURI } from '../utils';

const getCities = async (queryText: string): Promise<City[]> => {
  const geoCodingUri = getGeoCodingURI(queryText);

  try {
    const response = await requestAdapter(geoCodingUri);

    if (response.status === 401) {
      console.log('❌ Unauthorized, please check your OPEN_WEATHER_API_KEY.');
    }

    return getCitiesFromGeoCodingApiResponse(
      response.data as CityApiResponse[],
    );
  } catch (error) {
    throw new ServerError('❌ Error loading cities list.');
  }
};

export { getCities };

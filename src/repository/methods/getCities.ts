import { requestAdapter } from '../adapters/requestAdapter';
import { ServerError } from '../errors/serverError';
import { getCitiesFromGeoCodingApiResponse, getGeoCodingURI } from '../utils';

const getCities = async (queryText: string): Promise<City[]> => {
  const geoCodingUri = getGeoCodingURI(queryText);

  try {
    const response: CityApiResponse[] = await requestAdapter(geoCodingUri);

    return getCitiesFromGeoCodingApiResponse(response);
  } catch (error) {
    throw new ServerError('Error loading cities list.');
  }
};

export { getCities };

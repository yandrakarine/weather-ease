type City = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
};

type CityCoordinates = Pick<City, 'lat' | 'lon'>;

type CityApiResponse = City & {
  local_names: any;
};

type City = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
};

type CityApiResponse = City & {
  local_names: any;
};

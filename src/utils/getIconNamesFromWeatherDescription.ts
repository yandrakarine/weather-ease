import { IconName } from '@assets/iconName';

const iconsList: {
  [key: string]: IconName;
} = {
  'thunderstorm with light Rain': 'thunderstorm',
  'thunderstorm with rain': 'thunderstorm',
  'thunderstorm with heavy rain': 'thunderstorm',
  'light thunderstorm': 'thunderstorm',
  thunderstorm: 'thunderstorm',
  'heavy thunderstorm': 'thunderstorm',
  'ragged thunderstorm': 'thunderstorm',
  'thunderstorm with light drizzle': 'thunderstorm',
  'thunderstorm with drizzle': 'thunderstorm',
  'thunderstorm with heavy drizzle': 'thunderstorm',
  'light intensity drizzle': 'showerRain',
  drizzle: 'showerRain',
  'heavy intensity drizzle': 'showerRain',
  'light intensity drizzle rain': 'showerRain',
  'drizzle rain': 'showerRain',
  'heavy intensity drizzle rain': 'showerRain',
  'shower rain and drizzle': 'showerRain',
  'heavy shower rain and drizzle': 'showerRain',
  'shower drizzle': 'showerRain',
  'light rain': 'rainDay',
  'moderate rain': 'rainDay',
  'heavy intensity rain': 'rainDay',
  'very heavy rain': 'rainDay',
  'extreme rain': 'rainDay',
  'freezing rain': 'snow',
  'light intensity shower rain': 'showerRain',
  'shower rain': 'showerRain',
  'heavy intensity shower rain': 'showerRain',
  'ragged shower rain': 'showerRain',
  'light snow': 'snow',
  snow: 'snow',
  'heavy snow': 'snow',
  sleet: 'snow',
  'light shower sleet': 'snow',
  'shower sleet': 'snow',
  'light rain and snow': 'snow',
  'rain and snow': 'snow',
  'light shower snow': 'snow',
  'shower snow': 'snow',
  'heavy shower snow': 'snow',
  mist: 'mist',
  smoke: 'mist',
  haze: 'mist',
  'sand/dust whirls': 'mist',
  fog: 'mist',
  sand: 'mist',
  dust: 'mist',
  'volcanic ash': 'mist',
  squalls: 'mist',
  tornado: 'mist',
  'clear sky': 'clearSkyDay',
  'few clouds': 'fewCloudsDay',
  'scattered clouds': 'scatteredClouds',
  'broken clouds': 'brokenClouds',
  'overcast clouds': 'brokenClouds',
};

const getIconNamesFromWeatherDescription = (description: string) => {
  if (iconsList[description]) {
    return iconsList[description];
  }

  return null;
};

export { getIconNamesFromWeatherDescription };
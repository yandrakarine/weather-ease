const weatherIcons = {
  brokenClouds: require('./images/weatherIcons/brokenClouds.png'),
  clearSkyDay: require('./images/weatherIcons/clearSkyDay.png'),
  clearSkyNight: require('./images/weatherIcons/clearSkyNight.png'),
  fewCloudsDay: require('./images/weatherIcons/fewCloudsDay.png'),
  fewCloudsNight: require('./images/weatherIcons/fewCloudsNight.png'),
  mist: require('./images/weatherIcons/mist.png'),
  rainDay: require('./images/weatherIcons/rainDay.png'),
  rainNight: require('./images/weatherIcons/rainNight.png'),
  scatteredClouds: require('./images/weatherIcons/scatteredClouds.png'),
  showerRain: require('./images/weatherIcons/showerRain.png'),
  snow: require('./images/weatherIcons/snow.png'),
  thunderstorm: require('./images/weatherIcons/thunderstorm.png'),
};

const weatherDescriptionIcons = {
  angleLeft: require('./images/weatherDescriptionIcons/angleLeft.png'),
  arrowLeft: require('./images/weatherDescriptionIcons/arrowLeft.png'),
  feelsLike: require('./images/weatherDescriptionIcons/feelsLike.png'),
  humidity: require('./images/weatherDescriptionIcons/humidity.png'),
  markLocalization: require('./images/weatherDescriptionIcons/markLocalization.png'),
  probabilityOfPrecipitation: require('./images/weatherDescriptionIcons/probabilityOfPrecipitation.png'),
  search: require('./images/weatherDescriptionIcons/search.png'),
  tempMax: require('./images/weatherDescriptionIcons/tempMax.png'),
  tempMin: require('./images/weatherDescriptionIcons/tempMin.png'),
  thermometer: require('./images/weatherDescriptionIcons/thermometer.png'),
  visibility: require('./images/weatherDescriptionIcons/visibility.png'),
  wind: require('./images/weatherDescriptionIcons/wind.png'),
};

const Icons = { ...weatherIcons, ...weatherDescriptionIcons };

type IconName = keyof typeof Icons;

export { Icons };
export type { IconName };

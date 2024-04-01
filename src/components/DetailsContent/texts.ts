import { getTemperatureLabel } from '@utils/metricMesureUtils';

const texts = {
  details: 'Details',
  nexHours: 'Next hours',
  feelsLike: 'feels like',
  wind: 'wind',
  humidity: 'humidity',
  visibility: 'visibility',
  precipitation: 'precipitation',
  maxAndMin: ({
    tempMax,
    tempMin,
  }: Pick<DailyForecast['main'], 'tempMax' | 'tempMin'>) =>
    `${getTemperatureLabel(tempMax)}/${getTemperatureLabel(tempMin)}`,
};

export { texts };

const getTemperatureLabel = (
  temperature: DailyForecast['main']['temperature'],
) => {
  return `${Math.ceil(temperature)}°C`;
};

export { getTemperatureLabel };

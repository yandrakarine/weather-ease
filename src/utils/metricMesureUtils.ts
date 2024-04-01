const getTemperatureLabel = (
  temperature: DailyForecast['main']['temperature'],
) => {
  return `${Math.round(temperature)}°C`;
};

export { getTemperatureLabel };

const getPercentage = (value: number) => {
  if (value < 1) {
    return `${Math.round(value * 100)}%`;
  }
  return `${Math.round(value)}%`;
};

export { getPercentage };

const getMetersPerSecond = (speed: number) => {
  return `${speed} m/s`;
};

export { getMetersPerSecond };

const getDistance = (distance: number) => {
  if (distance >= 1000) {
    return `${distance / 1000} Km`;
  }
  return `${distance} m`;
};

export { getDistance };

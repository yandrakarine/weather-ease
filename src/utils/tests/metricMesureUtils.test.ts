import {
  getDistance,
  getMetersPerSecond,
  getPercentage,
  getTemperatureLabel,
} from '@utils/metricMesureUtils';

describe('getTemperatureLabel', () => {
  it('should return a string value with the celsius simbol', () => {
    const result = getTemperatureLabel(22.1);

    expect(result).toBe('22°C');
  });
});

describe('getPercentage', () => {
  it('should return a string value with the percentage simbol', () => {
    const result = getPercentage(22);

    expect(result).toBe('22%');
  });
});

describe('getMetersPerSecond', () => {
  it('should return a string value with the meters per seconds notation', () => {
    const result = getMetersPerSecond(22);

    expect(result).toBe('22 m/s');
  });
});

describe('getDistance', () => {
  it('should return a string value formated with the meter notation', () => {
    const result = getDistance(500);

    expect(result).toBe('500 m');
  });

  it('Should return the formated string with kilometers notation', () => {
    const result = getDistance(1000);

    expect(result).toBe('1 Km');
  });
});

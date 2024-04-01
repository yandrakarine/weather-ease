import { iconsList } from '../iconsList';
import { getIconNamesFromWeatherDescription } from '../utils';

describe('getIconNamesFromWeatherDescription', () => {
  it('should return correct icon name from weather description', () => {
    Object.keys(iconsList).forEach(weatherDescription => {
      const result = getIconNamesFromWeatherDescription(weatherDescription);

      expect(result).toBe(iconsList[weatherDescription]);
    });
  });

  it('should return the value null when it does not recognize the value of the provided weather description', () => {
    Object.keys(iconsList).forEach(() => {
      const result = getIconNamesFromWeatherDescription('');
      expect(result).toBeNull();
    });
  });
});

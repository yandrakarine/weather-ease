import { iconsList } from './iconsList';

const getIconNamesFromWeatherDescription = (description: string) => {
  if (iconsList[description]) {
    return iconsList[description];
  }

  return null;
};

export { getIconNamesFromWeatherDescription };

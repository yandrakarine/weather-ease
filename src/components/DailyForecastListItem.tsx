import { format } from 'date-fns';
import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container } from './Container';
import { Icon } from './Icon';
import { Typography } from './Typography';
import { getIconNamesFromWeatherDescription } from '@utils/iconsList';
import { getTemperatureLabel } from '@utils/metricMesure';

type DailyForecastListItemProps = DailyForecast & {
  onDailyForecastSelect: () => void;
};

const DailyForecastListItem = ({
  weather,
  main,
  onDailyForecastSelect,
  weatherDate,
}: DailyForecastListItemProps) => {
  const weatherDescription = weather.description;
  const iconName = getIconNamesFromWeatherDescription(weatherDescription);

  const weekDayLabel = useMemo(
    () => `${format(weatherDate, 'EEEE')}`,
    [weatherDate],
  );

  const temperatureLabel = useMemo(
    () =>
      `${getTemperatureLabel(main.tempMin)}/${getTemperatureLabel(
        main.tempMax,
      )}`,
    [main.tempMax, main.tempMin],
  );

  return (
    <TouchableOpacity onPress={onDailyForecastSelect}>
      <Container
        flexDirection="row"
        backgroundColor="white"
        justifyContent="space-between"
        padding="l"
        marginVertical="s"
        borderRadius="m">
        <Container>
          <Typography variant="p1">{weekDayLabel}</Typography>
          <Typography>{temperatureLabel}</Typography>
        </Container>
        <Container alignItems="flex-end">
          {iconName ? <Icon name={iconName} width={30} height={30} /> : null}
          <Container flex={1}>
            <Typography variant="p2">{weatherDescription}</Typography>
          </Container>
        </Container>
      </Container>
    </TouchableOpacity>
  );
};

export { DailyForecastListItem };

import { Container } from '@components/Container';
import { Icon } from '@components/Icon';
import { Spacer } from '@components/Spacer';
import { Typography } from '@components/Typography';
import { getIconNamesFromWeatherDescription } from '@utils/iconsList';
import { getTemperatureLabel } from '@utils/metricMesure';
import React, { useMemo } from 'react';
import { texts } from './texts';
import { format } from 'date-fns';

type ForecastHeaderProps = Pick<WeatherForecast['city'], 'name'> &
  DailyForecast;

const ForecastHeader = ({
  name,
  weather,
  main,
  weatherDate,
}: ForecastHeaderProps) => {
  const iconName = getIconNamesFromWeatherDescription(weather.description);

  const dateLabel = useMemo(
    () => `${format(weatherDate, 'EEEE')}, ${format(weatherDate, 'P')}`,
    [weatherDate],
  );

  const temperatureLabel = useMemo(
    () =>
      `${getTemperatureLabel(main.tempMin)}/${getTemperatureLabel(
        main.tempMax,
      )}`,
    [main.tempMax, main.tempMin],
  );

  const feelsLabel = useMemo(
    () => `${texts.feelsLike} ${getTemperatureLabel(main.feelsLike)}`,
    [main.feelsLike],
  );

  return (
    <>
      <Container
        flexDirection="row"
        justifyContent="space-between"
        marginBottom="xl">
        <Container>
          <Typography variant="h3" color="white">
            {name}
          </Typography>
          <Typography variant="h4" color="white">
            {dateLabel}
          </Typography>
          <Spacer vertical="xl" />
          <Container flexDirection="row" alignItems="center">
            {iconName ? (
              <Icon name={iconName} width={100} height={100} />
            ) : null}
            <Spacer horizontal="l" />
            <Typography variant="h3" color="white">
              {getTemperatureLabel(main.temperature)}
            </Typography>
          </Container>
        </Container>
        <Container justifyContent="center" flex={1} alignItems="flex-end">
          <Typography variant="p2" color="white" textAlign="left">
            {weather.description}
          </Typography>
          <Typography variant="p2" color="white" textAlign="left">
            {temperatureLabel}
          </Typography>
          <Typography variant="p2" color="white" textAlign="left">
            {feelsLabel}
          </Typography>
        </Container>
      </Container>
      <Typography variant="p1" color="white">
        {texts.nextForecasts}
      </Typography>
    </>
  );
};

export { ForecastHeader };

import { Container } from '@components/Container';
import { Icon } from '@components/Icon';
import { Spacer } from '@components/Spacer';
import { Typography } from '@components/Typography';
import React, { useMemo } from 'react';
import { texts } from './texts';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@styles/theme';
import { Dimensions } from 'react-native';
import { format } from 'date-fns';
import {
  getDistance,
  getMetersPerSecond,
  getPercentage,
  getTemperatureLabel,
} from '@utils/metricMesureUtils';
import { getIconNamesFromWeatherDescription } from '@utils/utils';

type DetailsContentProps = {
  cityName: RootStackParamList['DetailsScreen']['cityName'];
  weatherForecast: RootStackParamList['DetailsScreen']['weatherForecast'][number];
};

const DetailsContent = ({ cityName, weatherForecast }: DetailsContentProps) => {
  const deviceWidth = Dimensions.get('window').width;
  const theme = useTheme<Theme>();
  const iconName = getIconNamesFromWeatherDescription(
    weatherForecast.weather.description,
  );

  const dateLabel = useMemo(
    () =>
      `${format(weatherForecast.weatherDate, 'PPPP')} ${format(
        weatherForecast.weatherDate,
        'p',
      )}`,
    [weatherForecast],
  );

  dateLabel;
  return (
    <Container
      justifyContent="center"
      alignItems="center"
      marginBottom="m"
      paddingHorizontal="m">
      <Container justifyContent="center" alignItems="center" marginBottom="s">
        <Typography variant="h3" color="white">
          {cityName}
        </Typography>
        <Typography variant="p1" color="white">
          {dateLabel}
        </Typography>
      </Container>
      <Container
        backgroundColor="white"
        paddingHorizontal="l"
        paddingVertical="l"
        borderRadius="m"
        width={deviceWidth - 3 * theme.spacing.m}>
        <Container flex={1} alignItems="center">
          <Typography variant="h4" color="black">
            {weatherForecast.weather.description}
          </Typography>
        </Container>

        <Container flex={1} flexDirection="row" marginBottom="s">
          <Spacer horizontal="l" />
          <Container flex={1}>
            {iconName ? (
              <Icon name={iconName} width={100} height={100} />
            ) : null}
          </Container>

          <Container flex={1} alignItems="center" justifyContent="center">
            <Container
              flexDirection="row"
              alignItems="center"
              justifyContent="center">
              <Icon name="thermometer" width={24} height={24} color="black" />
              <Typography variant="h2" color="darkBlue">
                {getTemperatureLabel(weatherForecast.main.temperature)}
              </Typography>
            </Container>
            <Typography variant="p1">
              {texts.maxAndMin({
                tempMax: weatherForecast.main.tempMax,
                tempMin: weatherForecast.main.tempMin,
              })}
            </Typography>
          </Container>
        </Container>

        <Container flex={1} flexDirection="row" justifyContent="space-between">
          <Spacer horizontal="xl" />
          <Container
            flex={1}
            flexDirection="row"
            gap="s"
            paddingVertical="s"
            marginBottom="s">
            <Icon name="feelsLike" width={20} height={20} color="black" />
            <Container alignItems="center" justifyContent="center">
              <Typography variant="p2" color="darkBlue">
                {texts.feelsLike}
              </Typography>
            </Container>
          </Container>
          <Container
            flex={1}
            alignItems="center"
            paddingVertical="s"
            marginBottom="s">
            <Typography variant="p2">
              {getTemperatureLabel(weatherForecast.main.feelsLike)}
            </Typography>
          </Container>
        </Container>

        <Container flex={1} flexDirection="row" justifyContent="space-between">
          <Spacer horizontal="xl" />
          <Container
            flex={1}
            flexDirection="row"
            gap="s"
            paddingVertical="s"
            marginBottom="s">
            <Icon name="wind" width={20} height={20} color="black" />
            <Container alignItems="center" justifyContent="center">
              <Typography variant="p2" color="darkBlue">
                {texts.wind}
              </Typography>
            </Container>
          </Container>
          <Container
            flex={1}
            alignItems="center"
            paddingVertical="s"
            marginBottom="s">
            <Typography variant="p2">
              {getMetersPerSecond(weatherForecast.wind.speed)}
            </Typography>
          </Container>
        </Container>

        <Container flex={1} flexDirection="row" justifyContent="space-between">
          <Spacer horizontal="xl" />
          <Container
            flex={1}
            flexDirection="row"
            gap="s"
            paddingVertical="s"
            marginBottom="s">
            <Icon name="humidity" width={20} height={20} color="black" />
            <Container alignItems="center" justifyContent="center">
              <Typography variant="p2" color="darkBlue">
                {texts.humidity}
              </Typography>
            </Container>
          </Container>
          <Container
            flex={1}
            alignItems="center"
            paddingVertical="s"
            marginBottom="s">
            <Typography variant="p2">
              {getPercentage(weatherForecast.main.humidity)}
            </Typography>
          </Container>
        </Container>

        <Container flex={1} flexDirection="row" justifyContent="space-between">
          <Spacer horizontal="xl" />
          <Container
            flex={1}
            flexDirection="row"
            gap="s"
            paddingVertical="s"
            marginBottom="s">
            <Icon name="visibility" width={20} height={20} color="black" />
            <Container alignItems="center" justifyContent="center">
              <Typography variant="p2" color="darkBlue">
                {texts.visibility}
              </Typography>
            </Container>
          </Container>
          <Container
            flex={1}
            alignItems="center"
            paddingVertical="s"
            marginBottom="s">
            <Typography variant="p2">
              {getDistance(weatherForecast.visibility)}
            </Typography>
          </Container>
        </Container>

        <Container flex={1} flexDirection="row" justifyContent="space-between">
          <Spacer horizontal="xl" />
          <Container
            flex={1}
            flexDirection="row"
            gap="s"
            paddingVertical="s"
            marginBottom="s">
            <Icon
              name="probabilityOfPrecipitation"
              width={20}
              height={20}
              color="black"
            />
            <Container alignItems="center" justifyContent="center">
              <Typography variant="p2" color="darkBlue">
                {texts.precipitation}
              </Typography>
            </Container>
          </Container>
          <Container
            flex={1}
            alignItems="center"
            paddingVertical="s"
            marginBottom="s">
            <Typography variant="p2">
              {getPercentage(weatherForecast.probabilityOfPrecipitation)}
            </Typography>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export { DetailsContent };

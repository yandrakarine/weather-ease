import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container } from './Container';
import { Icon } from './Icon';
import { Typography } from './Typography';

type DailyForecastListItemProps = DailyForecast & {
  onDailyForecastSelect: () => void;
};

const DailyForecastListItem = ({
  weatherDate,
  weather,
  main,
  onDailyForecastSelect,
}: DailyForecastListItemProps) => {
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
          <Typography variant="p1">{weatherDate}</Typography>
          <Typography>{`${main.tempMin}/${main.tempMax}`}</Typography>
        </Container>
        <Container alignItems="flex-end">
          <Icon name="brokenClouds" width={40} height={40} />
          <Container flex={1}>
            <Typography variant="p2">{weather[0].description}</Typography>
          </Container>
        </Container>
      </Container>
    </TouchableOpacity>
  );
};

export { DailyForecastListItem };

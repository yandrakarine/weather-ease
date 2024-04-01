import { Container } from '@components/Container';
import { Icon } from '@components/Icon';
import { Spacer } from '@components/Spacer';
import { Typography } from '@components/Typography';
import { getIconNamesFromWeatherDescription } from '@utils/utils';
import { getPercentage, getTemperatureLabel } from '@utils/metricMesureUtils';
import { format } from 'date-fns';
import React from 'react';
import { TouchableOpacity } from 'react-native';

type DetailsListItemProps = Pick<
  DailyForecast,
  'weatherDate' | 'probabilityOfPrecipitation'
> &
  Pick<DailyForecast['main'], 'temperature'> &
  Pick<DailyForecast['weather'], 'description'> & {
    onSelectedHour: () => void;
  };

const DetailsListItem = ({
  weatherDate,
  description,
  probabilityOfPrecipitation,
  temperature,
  onSelectedHour,
}: DetailsListItemProps) => {
  const icon = getIconNamesFromWeatherDescription(description);

  return (
    <TouchableOpacity onPress={onSelectedHour}>
      <Container
        backgroundColor="white"
        alignItems="center"
        paddingVertical="s"
        borderRadius="m"
        width={80}>
        <Typography variant="p2">{format(weatherDate, 'p')}</Typography>
        {icon ? <Icon name={icon} width={28} height={28} /> : null}
        <Typography variant="p2" color="black">
          {getTemperatureLabel(temperature)}
        </Typography>
        <Container flexDirection="row">
          <Icon name="probabilityOfPrecipitation" width={14} height={14} />
          <Spacer horizontal="s" />
          <Typography>{getPercentage(probabilityOfPrecipitation)}</Typography>
        </Container>
      </Container>
    </TouchableOpacity>
  );
};

export { DetailsListItem };

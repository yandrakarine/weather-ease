import { getWeatherForecast } from '@repository/methods';
import { useQuery } from '@tanstack/react-query';
import React, { useCallback, useMemo } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import { Container } from './Container';
import { DailyForecastListItem } from './DailyForecastListItem';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@styles/theme';

type CityCoordinatesProps = CityCoordinates & {
  onDailyForecastSelect: () => void;
};

const ForecastContent = ({
  lat,
  lon,
  onDailyForecastSelect,
}: CityCoordinatesProps) => {
  const theme = useTheme<Theme>();

  const styles = useMemo(
    () => ({
      containerStyle: {
        borderRadius: theme.spacing.m,
        paddingVertical: theme.spacing.m,
        marginTop: theme.spacing.m,
        width: Dimensions.get('window').width - 3 * theme.spacing.m,
      },
    }),
    [theme.spacing.m],
  );

  const { data, isLoading, isRefetching } = useQuery({
    queryKey: ['getWeatherForecast', { lat, lon }],
    enabled: !!lat && !!lon,
    queryFn: () => getWeatherForecast({ lat, lon }),
  });

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<DailyForecast>) => (
      <DailyForecastListItem
        {...item}
        onDailyForecastSelect={onDailyForecastSelect}
      />
    ),
    [onDailyForecastSelect],
  );

  if (isLoading || isRefetching) {
    return (
      <Container style={styles.containerStyle} backgroundColor="white">
        <ActivityIndicator size={'large'} />
      </Container>
    );
  }

  return (
    <FlatList
      data={data?.list}
      renderItem={renderItem}
      keyboardShouldPersistTaps={'handled'}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.containerStyle}
    />
  );
};

export { ForecastContent };

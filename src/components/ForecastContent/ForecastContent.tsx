import { getWeatherForecast } from '@repository/methods';
import { useQuery } from '@tanstack/react-query';
import React, { useCallback, useMemo } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import { Container } from '../Container';
import { DailyForecastListItem } from '../DailyForecastListItem';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@styles/theme';
import { ForecastHeader } from './ForecastHeader';
import { Typography } from '@components/Typography';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type DetailsScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const ForecastContent = ({ lat, lon }: CityCoordinates) => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation<DetailsScreenNavigationProp>();

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

  const { data, isLoading, isRefetching, error } = useQuery({
    queryKey: ['getWeatherForecast', { lat, lon }],
    enabled: !!lat && !!lon,
    queryFn: () => getWeatherForecast({ lat, lon }),
  });

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<DailyForecast>) => {
      const onDailyForecastSelect = () => {
        if (!data?.dailyForecastsByDay[index] || !data?.city.name) {
          return null;
        }

        navigation.navigate('DetailsScreen', {
          weatherForecast: data.dailyForecastsByDay[index],
          cityName: data.city.name,
        });
      };

      return (
        <DailyForecastListItem
          {...item}
          onDailyForecastSelect={onDailyForecastSelect}
        />
      );
    },
    [data?.city, data?.dailyForecastsByDay, navigation],
  );

  const HeaderComponent = useCallback(() => {
    if (!data?.city.name || !data.firstForecastForEachDay[0]) {
      return null;
    }

    return (
      <ForecastHeader
        name={data?.city.name}
        {...data.firstForecastForEachDay[0]}
      />
    );
  }, [data?.city.name, data?.firstForecastForEachDay]);

  if (isLoading || isRefetching) {
    return (
      <Container style={styles.containerStyle} backgroundColor="white">
        <ActivityIndicator size={'large'} />
      </Container>
    );
  }

  if (error) {
    return (
      <Container
        style={styles.containerStyle}
        alignItems="center"
        backgroundColor="white">
        <Typography variant="p1" textAlign="center">
          {error.message}
        </Typography>
      </Container>
    );
  }

  return (
    <FlatList
      data={data?.firstForecastForEachDay}
      renderItem={renderItem}
      keyboardShouldPersistTaps={'handled'}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.containerStyle}
      ListHeaderComponent={HeaderComponent}
    />
  );
};

export { ForecastContent };

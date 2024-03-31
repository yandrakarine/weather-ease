import { Container } from '@components/Container';
import { DetailsListItem } from '@components/DetailsContent/DatailsListItem';
import { DetailsContent } from '@components/DetailsContent/DetailsContent';
import { Typography } from '@components/Typography';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@styles/theme';
import React, { useCallback, useMemo, useState } from 'react';
import { FlatList, ListRenderItemInfo, ScrollView } from 'react-native';
import { texts } from './texts';

type DetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'DetailsScreen'
>;

const DetailsScreen = ({ route }: DetailScreenProps) => {
  const { weatherForecast, cityName } = route.params;
  const [selectedHourIndex, setSelectedHourIndex] = useState(0);
  const theme = useTheme<Theme>();

  const scroolViewStyles = useMemo(
    () => ({
      containerStyle: {
        backgroundColor: theme.colors.mainBackground,
        flexGrow: 1,
      },
    }),
    [theme.colors.mainBackground],
  );

  const flatListStyles = useMemo(
    () => ({
      containerStyle: {
        borderRadius: theme.spacing.m,
        paddingVertical: theme.spacing.s,
      },
    }),
    [theme.spacing.m, theme.spacing.s],
  );

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<DailyForecast>) => {
      return (
        <DetailsListItem
          weatherDate={item.weatherDate}
          description={item.weather.description}
          probabilityOfPrecipitation={item.probabilityOfPrecipitation}
          temperature={item.main.temperature}
          onSelectedHour={() => setSelectedHourIndex(index)}
        />
      );
    },
    [],
  );

  return (
    <ScrollView contentContainerStyle={scroolViewStyles.containerStyle}>
      <DetailsContent
        cityName={cityName}
        weatherForecast={weatherForecast[selectedHourIndex]}
      />
      <Container paddingLeft="l">
        <Typography variant="p1" color="white">
          {texts.nexHours}
        </Typography>
        <FlatList
          horizontal={true}
          data={weatherForecast}
          contentContainerStyle={flatListStyles.containerStyle}
          renderItem={renderItem}
        />
      </Container>
    </ScrollView>
  );
};

export { DetailsScreen };

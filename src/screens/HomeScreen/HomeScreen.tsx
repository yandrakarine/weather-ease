import { CitiesContent } from '@components/CitiesContent';
import { Container } from '@components/Container';
import { ForecastContent } from '@components/ForecastContent';
import { SearchInput } from '@components/SearchInput';
import { useDebounce } from '@hooks/useDebounce';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import { texts } from './texts';
import { Typography } from '@components/Typography';
import { Visibility } from '@components/Visibility';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const DELAY = 500;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [queryText, setQueryText] = useState('');
  const [cityCoordinates, setCityCoordinates] = useState<CityCoordinates>();

  const debouncedValue = useDebounce(queryText, DELAY);

  const onSelectCity = useCallback(
    (selectedCityCoordinates: CityCoordinates) => {
      setQueryText('');
      setCityCoordinates(selectedCityCoordinates);
    },
    [],
  );

  const hasSelectedCity = !!cityCoordinates?.lat && cityCoordinates.lon;

  const shouldShowForecastsList = hasSelectedCity && !queryText;

  return (
    <Container
      flex={1}
      alignItems="center"
      padding="l"
      backgroundColor="mainBackground">
      <SearchInput
        backgroundColor="white"
        borderRadius={'xl'}
        placeholder={texts.searchFor}
        paddingHorizontal="l"
        onChangeText={setQueryText}
        value={queryText}
      />
      {queryText ? (
        <CitiesContent
          debouncedValue={debouncedValue}
          onSelectCity={onSelectCity}
        />
      ) : null}
      {shouldShowForecastsList ? (
        <ForecastContent
          lat={cityCoordinates.lat}
          lon={cityCoordinates.lon}
          onDailyForecastSelect={() => navigation.navigate('DetailsScreen')}
        />
      ) : null}
      <Visibility isVisible={!shouldShowForecastsList && !queryText}>
        <Container flexGrow={1} justifyContent="center">
          <Typography textAlign="center" variant="h4" color="white">
            {texts.pleaseSearch}
          </Typography>
        </Container>
      </Visibility>
    </Container>
  );
};

export { HomeScreen };

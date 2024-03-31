import { CitiesContent } from '@components/CitiesContent';
import { Container } from '@components/Container';
import { ForecastContent } from '@components/ForecastContent/ForecastContent';
import { SearchInput } from '@components/SearchInput';
import { useDebounce } from '@hooks/useDebounce';
import React, { useCallback, useState } from 'react';
import { texts } from './texts';
import { Typography } from '@components/Typography';
import { Visibility } from '@components/Visibility';

const DELAY = 500;

const HomeScreen = () => {
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
        placeholder={texts.searchFor}
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
        <ForecastContent lat={cityCoordinates.lat} lon={cityCoordinates.lon} />
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

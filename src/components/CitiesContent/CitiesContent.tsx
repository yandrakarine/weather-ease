import { getCities } from '@repository/methods';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@styles/theme';
import { useQuery } from '@tanstack/react-query';
import React, { useCallback, useMemo } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import { CityListItem } from '../CityListItem';
import { Container } from '../Container';
import { Typography } from '@components/Typography';
import { texts } from './texts';

type CitiesContentProps = {
  debouncedValue: string;
  onSelectCity: ({ lat, lon }: CityCoordinates) => void;
};

const CitiesContent = ({
  debouncedValue,
  onSelectCity,
}: CitiesContentProps) => {
  const theme = useTheme<Theme>();

  const styles = useMemo(
    () => ({
      containerStyle: {
        backgroundColor: theme.colors.white,
        borderRadius: theme.spacing.m,
        paddingVertical: theme.spacing.m,
        marginTop: theme.spacing.m,
        width: Dimensions.get('window').width - 3 * theme.spacing.m,
      },
    }),
    [theme.colors.white, theme.spacing.m],
  );

  const { data, isLoading, isRefetching } = useQuery({
    queryKey: ['getCities', debouncedValue],
    enabled: !!debouncedValue,
    queryFn: () => getCities(debouncedValue),
  });

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<City>) => (
      <CityListItem {...item} handleOnPress={onSelectCity} />
    ),
    [onSelectCity],
  );

  const ListEmptyComponent = useCallback(
    () => (
      <Container style={styles.containerStyle} alignItems="center">
        <Typography variant="p1" textAlign="center">
          {texts.weCantFound}
        </Typography>
      </Container>
    ),
    [styles.containerStyle],
  );

  if (isLoading || isRefetching) {
    return (
      <Container style={styles.containerStyle}>
        <ActivityIndicator size={'large'} color={theme.colors.mainBackground} />
      </Container>
    );
  }

  if (!debouncedValue) {
    return null;
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      contentContainerStyle={styles.containerStyle}
      keyboardShouldPersistTaps={'handled'}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export { CitiesContent };

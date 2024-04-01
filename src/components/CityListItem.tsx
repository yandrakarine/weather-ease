import React from 'react';
import { Icon } from './Icon';
import { Typography } from './Typography';
import { TouchableOpacity } from 'react-native';
import { Container } from './Container';
import { Spacer } from './Spacer';

type CityListItemProps = City & {
  handleOnPress: ({ lat, lon }: CityCoordinates) => void;
};

const CityListItem = ({
  country,
  handleOnPress,
  lat,
  lon,
  name,
  state,
}: CityListItemProps) => {
  const onPress = () =>
    handleOnPress({
      lat,
      lon,
    });

  return (
    <TouchableOpacity onPress={onPress}>
      <Container
        flexDirection="row"
        paddingVertical="s"
        alignItems="center"
        flexGrow={1}>
        <Spacer horizontal="s" />
        <Icon name="markLocalization" width={20} height={20} color="iconGrey" />
        <Spacer horizontal="s" />
        <Container flex={1}>
          <Typography variant="p2">{`${name}, ${state} - ${country}`}</Typography>
        </Container>
      </Container>
    </TouchableOpacity>
  );
};

export { CityListItem };

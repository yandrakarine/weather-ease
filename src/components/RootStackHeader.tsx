import React from 'react';
import { Container } from './Container';
import { Spacer } from './Spacer';
import { Icon } from './Icon';
import { Typography } from './Typography';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Visibility } from './Visibility';

type RootStackHeaderProps = {
  navigation: NativeStackHeaderProps['navigation'];
  title?: string;
};

const RootStackHeader = ({ navigation, title }: RootStackHeaderProps) => (
  <Container
    backgroundColor="mainBackground"
    paddingVertical="l"
    flexDirection="row"
    alignItems="center">
    <Spacer horizontal="m" />
    <Icon
      name="arrowLeft"
      width={30}
      height={30}
      color="white"
      touchProps={{
        onPress: navigation.goBack,
      }}
    />
    <Spacer horizontal="m" />
    <Visibility isVisible={!!title}>
      <Typography variant="p1" color="white">
        {title}
      </Typography>
    </Visibility>
  </Container>
);

export { RootStackHeader };

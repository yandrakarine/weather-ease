import { Container } from '@components/Container';
import React from 'react';
import { Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'DetailsScreen'
>;

const DetailsScreen = ({ navigation }: DetailsScreenProps) => {
  return (
    <Container
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="white">
      <Text onPress={() => navigation.navigate('HomeScreen')}>
        Weather Details Screen
      </Text>
    </Container>
  );
};

export { DetailsScreen };

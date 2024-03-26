import { Container } from '@components/Container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <Container
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="white">
      <Text onPress={() => navigation.navigate('DetailsScreen')}>
        Home Screen
      </Text>
    </Container>
  );
};

export { HomeScreen };

import { Container } from '@components/Container';
import { SearchInput } from '@components/SearchInput';
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
      padding="l"
      backgroundColor="mainBackground">
      <SearchInput
        backgroundColor="white"
        borderRadius={'xl'}
        placeholder="Search for a city"
        paddingHorizontal="l"
      />
      <Text onPress={() => navigation.navigate('DetailsScreen')}>
        Home Screen
      </Text>
    </Container>
  );
};

export { HomeScreen };

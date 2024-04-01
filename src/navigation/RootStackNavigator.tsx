import React from 'react';
import { RootStackHeader } from '@components/RootStackHeader';
import { Visibility } from '@components/Visibility';
import {
  NativeStackHeaderProps,
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { HomeScreen } from '@screens/HomeScreen';
import { DetailsScreen } from '@screens/DetailsScreen/DetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const getScreenOptions = ({
  withoutHeader,
  navigation,
  title,
}: {
  title?: string;
  withoutHeader?: boolean;
  navigation: NativeStackHeaderProps['navigation'];
}): NativeStackNavigationOptions => ({
  presentation: 'card',
  headerTitleAlign: 'center',
  headerBackVisible: false,
  title: '',
  header: () => (
    <Visibility isVisible={!withoutHeader}>
      <RootStackHeader navigation={navigation} title={title} />
    </Visibility>
  ),
});

const RootStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Group
        screenOptions={({ navigation }) =>
          getScreenOptions({
            withoutHeader: true,
            navigation,
          })
        }>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={({ navigation }) =>
          getScreenOptions({
            navigation,
            withoutHeader: false,
            title: 'Details',
          })
        }>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export { RootStackNavigator };

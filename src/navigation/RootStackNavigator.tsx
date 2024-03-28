import React from 'react';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { HomeScreen } from '@screens/HomeScreen';
import { DetailsScreen } from '@screens/DetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const getScreenOptions = (
  withoutHeader?: boolean,
): NativeStackNavigationOptions => ({
  presentation: 'card',
  headerTitleAlign: 'center',
  headerBackVisible: false,
  title: '',
  ...(withoutHeader && { header: () => null }),
});

const RootStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Group screenOptions={() => getScreenOptions(true)}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={() => getScreenOptions(false)}>
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export { RootStackNavigator };

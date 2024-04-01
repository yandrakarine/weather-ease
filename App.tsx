import React from 'react';
import { Navigation } from '@navigation/Navigation';
import { AppProvider } from '@components/AppProvider';
import { StatusBar } from 'react-native';
import theme from '@styles/theme';

const App = () => (
  <AppProvider>
    <StatusBar
      barStyle={'light-content'}
      backgroundColor={theme.colors.mainBackground}
    />
    <Navigation />
  </AppProvider>
);

export default App;

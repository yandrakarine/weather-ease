import React from 'react';
import { Navigation } from './src/navigation/Navigation';
import { ThemeProvider } from '@shopify/restyle';
import theme from '@styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;

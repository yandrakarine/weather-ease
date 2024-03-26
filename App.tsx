import { Container } from '@components/Container';
import { OPEN_WEATHER_API_KEY } from '@env';
import { ThemeProvider } from '@shopify/restyle';
import theme from '@styles/theme';
import React from 'react';
import { Text } from 'react-native';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container justifyContent="center" alignItems="center" flex={1}>
        <Text>{OPEN_WEATHER_API_KEY}</Text>
      </Container>
    </ThemeProvider>
  );
};

export default App;

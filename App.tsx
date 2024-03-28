import React from 'react';
import { AppProvider } from '@components/AppProvider';
import { Navigation } from '@navigation/Navigation';

const App = () => (
  <AppProvider>
    <Navigation />
  </AppProvider>
);

export default App;

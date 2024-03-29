import React from 'react';
import { Navigation } from '@navigation/Navigation';
import { AppProvider } from '@components/AppProvider';

const App = () => (
  <AppProvider>
    <Navigation />
  </AppProvider>
);

export default App;

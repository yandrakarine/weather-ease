import { ThemeProvider } from '@shopify/restyle';
import theme from '@styles/theme';
import React from 'react';
import { ReactNode } from 'react';

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { AppProvider };

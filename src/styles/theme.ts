import { createTheme } from '@shopify/restyle';

const palette = {
  black: '#0B0B0B',
  white: '#FFFFFF',
  background: '#1A1C4B',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    white: palette.white,
    black: palette.black,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
});

export type Theme = typeof theme;
export default theme;

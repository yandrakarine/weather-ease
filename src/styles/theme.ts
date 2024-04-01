import { FontName } from '@assets/fonts/fontName';
import { createTheme } from '@shopify/restyle';

const palette = {
  black: '#0B0B0B',
  white: '#FFFFFF',
  background: '#1A1C4B',
  bgMain: '#8ba8d2',
  iconGrey: '#d3d3d3',
  textBlue: '#0D273F',
};

const theme = createTheme({
  colors: {
    iconGrey: palette.iconGrey,
    mainBackground: palette.bgMain,
    white: palette.white,
    black: palette.black,
    darkBlue: palette.textBlue,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    h1: {
      fontFamily: FontName['Poppins-SemiBold'],
      fontSize: 48,
    },
    h2: {
      fontFamily: FontName['Poppins-Regular'],
      fontSize: 44,
    },
    h3: {
      fontFamily: FontName['Poppins-SemiBold'],
      fontSize: 32,
    },
    h4: {
      fontFamily: FontName['Poppins-Regular'],
      fontSize: 16,
    },
    p1: {
      fontFamily: FontName['Poppins-Regular'],
      fontSize: 16,
    },
    p2: {
      fontFamily: FontName['Poppins-Regular'],
      fontSize: 12,
    },
    defaults: {
      fontFamily: FontName['Poppins-Regular'],
      fontSize: 12,
    },
  },
});

export type Theme = typeof theme;
export default theme;

import {
  darkBackgroundColors,
  darkBrandColors,
  darkTextColors,
  darkUIColors,
} from './colors';
import {fonts, fontSizes, lineHeights} from './fonts';

export const darkTheme = {
  colors: {
    brand: {
      ...darkBrandColors,
    },
    ui: {
      ...darkUIColors,
    },
    text: {
      ...darkTextColors,
    },
    background: {
      ...darkBackgroundColors,
    },
  },
  fonts: {
    fontSizes,
    fonts,
    lineHeights,
  },
  dark: true,
};

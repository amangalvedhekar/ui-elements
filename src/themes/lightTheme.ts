import {
  backgroundColors,
  brandColors,
  textColors,
  UIColors,
} from './colors';
import {fonts, fontSizes, lineHeights} from './fonts';

export const lightTheme = {
  colors: {
    brand: {
      ...brandColors,
    },
    ui: {
      ...UIColors,
    },
    text: {
      ...textColors,
    },
    background: {
      ...backgroundColors,
    },
  },
  fonts: {
    fontSizes,
    fonts,
    lineHeights,
  },
  dark: false,
};

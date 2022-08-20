import {Text as NativeText, StyleSheet} from 'react-native';
import {useTheme} from '../../themes';
import React from 'react';
import {CustomTextProps} from "./types";
// @ts-ignore
const createStyles = (fonts, colors, textType, textColor) => StyleSheet.create({
  text: {
    ...fonts.fonts[textType],
    fontSize: fonts.fontSizes[0],
    color: colors.text[textColor],
    textAlign: 'left',
  }
});
export function Text({children, style, textType = 'regular', textColor = 'primary',...rest}: CustomTextProps) {
  const {fonts, colors} = useTheme();
  const baseStyles = createStyles(fonts, colors, textType, textColor);
  return (
    <NativeText
      {...rest}
      style={[baseStyles.text, style]}>
      {children}
    </NativeText>
  );
}

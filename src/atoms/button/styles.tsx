import {StyleSheet} from "react-native";

export const createButtonStyles = (theme: any) => StyleSheet.create({
  pressable: {
    flexBasis: 56,
    flexGrow: 0.01,
    minHeight: 56,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 24,
  },
  text: {
    color: theme.colors.text.inverse,
    ...theme.fonts.fonts.regular,
  }
});

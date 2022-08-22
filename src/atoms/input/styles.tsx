import {StyleSheet} from "react-native";

export const createInputStyles = (theme: any, isInErrorState: boolean) => StyleSheet.create({
  inputBox: {
    borderRadius: 8,
    borderWidth: 1,
color: theme.colors.text.primary,
    padding: 8,
    borderColor: isInErrorState ? theme.colors.ui.error : theme.colors.ui.primary,
  }
});

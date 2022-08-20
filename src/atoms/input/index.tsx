import {InputProps} from "./types";
import {TextInput} from "react-native";
import {createInputStyles} from "./styles";
import {useTheme} from "../../themes";

export function Input({value, isInErrorState = false,...rest}:InputProps) {
  const theme = useTheme();
  const styles = createInputStyles(theme, isInErrorState);
  return (
    <TextInput
      style={styles.inputBox}
      placeholderTextColor={theme.colors.text.disabled}
      keyboardAppearance={theme.dark ? 'dark' : 'light'}
      value={value}
      {...rest}
    />
  );
}

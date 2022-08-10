import {ButtonProps} from "./types";
import {useTheme} from "../../themes";
import {Pressable, Text} from "react-native";
import {createButtonStyles} from "./styles";

export function Button({ label, ...rest}: ButtonProps) {
  const theme = useTheme();
  const styles = createButtonStyles(theme);
  return (
    <Pressable
      style={
      ({pressed}) => [
        styles.pressable,
        {
          backgroundColor: pressed ? theme.colors.ui.primaryDisabled: theme.colors.ui.primary,
          borderColor: pressed ? theme.colors.ui.primaryDisabled: theme.colors.ui.primary,
        }
      ]}
      {...rest}
    >
      <Text style={[styles.text, {fontSize: theme.fonts.fontSizes[0]}]}>
        {label}
      </Text>
    </Pressable>
  );
}
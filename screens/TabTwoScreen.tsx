import { StyleSheet, Text, View } from 'react-native';
import {Button, useTheme} from "../src";

export default function TabTwoScreen() {
  const theme = useTheme();
  return (
    <View style={{...styles.container, backgroundColor: theme.colors.background.main}}>
      <Button label="Simple Button" />
      <Button label="Disabled Button" disabled />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

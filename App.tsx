import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './navigation';
import {ThemeProvider} from "./src";
import React from "react";
import {PortalProvider} from "@gorhom/portal";
import {lightTheme} from "./src/themes/lightTheme";
import {SafeAreaView, View} from "react-native";
import {darkTheme} from "./src/themes/darkTheme";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {/*<PortalProvider>*/}
      <ThemeProvider theme={colorScheme === 'light' ? lightTheme: darkTheme}>
        <>

            <Navigation colorScheme={colorScheme}/>
        </>
        <StatusBar/>
      </ThemeProvider>
        {/*</PortalProvider>*/}
      </SafeAreaProvider>
    );
  }
}

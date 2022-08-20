import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './navigation';
import {ThemeProvider} from "./src";
import React from "react";
import {PortalProvider} from "@gorhom/portal";
import {lightTheme} from "./src/themes/lightTheme";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        {/*<PortalProvider>*/}
      <ThemeProvider theme={lightTheme}>
        <SafeAreaProvider>
            <Navigation colorScheme={colorScheme}/>
          <StatusBar/>
        </SafeAreaProvider>
      </ThemeProvider>
        {/*</PortalProvider>*/}
      </>
    );
  }
}

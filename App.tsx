import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './navigation';
import {ThemeProvider} from "./src";
import React from "react";
import {PortalProvider} from "@gorhom/portal";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <React.StrictMode>
        {/*<PortalProvider>*/}
      <ThemeProvider>
        <SafeAreaProvider>
            <Navigation colorScheme={colorScheme}/>
          <StatusBar/>
        </SafeAreaProvider>
      </ThemeProvider>
        {/*</PortalProvider>*/}
      </React.StrictMode>
    );
  }
}

import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import {
  Cairo_200ExtraLight,
  Cairo_300Light,
  Cairo_400Regular,
  Cairo_500Medium,
  Cairo_800ExtraBold,
} from '@expo-google-fonts/cairo';
export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'Cairo-Regular': Cairo_400Regular,
          "Cairo-Medium": Cairo_500Medium,
          'Cairo-ExtraLight': Cairo_200ExtraLight,
          'Cairo-Thin': Cairo_300Light,
          'Cairo-ExtraBold': Cairo_800ExtraBold
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    (async () => await loadResourcesAndDataAsync())();
  }, []);

  return isLoadingComplete;
}

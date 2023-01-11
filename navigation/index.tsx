import {FontAwesome} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, Pressable, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import {useTheme} from "../src";
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import {RootStackParamList, RootTabParamList, RootTabScreenProps} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import {FormProvider} from "../src";
import {useFlipper} from '@react-navigation/devtools';
import {SafeAreaView} from "react-native-safe-area-context";

export default function Navigation({colorScheme}: { colorScheme: ColorSchemeName }) {
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator/>
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const theme = useTheme();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background.main}} edges={['top']} mode="padding">
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen name="Form" options={{headerShown: false}}>
          {(props) => (
            <ScrollView style={{flex: 1, backgroundColor: theme.colors.background.main}} {...props}>
              <KeyboardAvoidingView
                behavior={"position"}

              >
                <FormProvider>
                  <TabOneScreen/>
                </FormProvider>
              </KeyboardAvoidingView>
            </ScrollView>
          )}
        </Stack.Screen>
        <Stack.Screen name="Root" options={{headerShown: false}}>
          {(props) =><BottomTabNavigator {...props} theme={theme}/>}
        </Stack.Screen>
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="Modal" component={ModalScreen} options={{
            animation: 'fade'
          }}/>
        </Stack.Group>
      </Stack.Navigator>
    </SafeAreaView>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator({theme}) {
  // const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Atoms"

      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background.main
        }
      }}
    >
      <BottomTab.Screen
        name="Atoms"
        children={({navigation, route}) => (
          <>
            <ScrollView contentContainerStyle={{flex: 1, backgroundColor: theme.colors.background.main}}>
              <FormProvider>
                <TabOneScreen/>
              </FormProvider>
            </ScrollView>
          </>
        )}
        options={({navigation}: RootTabScreenProps<'Atoms'>) => ({
          title: 'Form',
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({color}) => <TabBarIcon name="code" color={color}/>,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                style={{marginRight: 15}}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Molecules"
        component={TabTwoScreen}
        options={{
          title: 'Atoms',
          tabBarIcon: ({color}) => <TabBarIcon name="code" color={color}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{marginBottom: -3}} {...props} />;
}

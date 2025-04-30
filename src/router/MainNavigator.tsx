import { LinkingOptions, NavigationContainer, ParamListBase, ParamListRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ThemeTestScreen from '../view/safe';
import ProfileScreen from '../view/profile';
import NormalScreen from '../view/normal';
import HomeScreen from '../view/home';
import SafeScreen from '../view/safe';
import IconFont, { IconNames } from '../assets/iconfont';
import React from 'react';
import { useTheme } from '../provider/theme/ThemeContext';
import { DrawerProvider } from '../provider/drawer/DrawerContext';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text } from 'react-native';
import { AuthProvider, useAuth } from '../provider/auth/AuthContext';
import SignInScreen from '../view/signIn';
import SplashScreen from '../view/splash';

function GradientBackground() {
  console.log(StyleSheet.absoluteFillObject, 'StyleSheet.absoluteFillObject');

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
      colors={['#3C8CE7', '#F067B4']}
      style={StyleSheet.absoluteFillObject}
    >
    </LinearGradient>
  );
}

const Tab = createBottomTabNavigator();
const TabBarIcon = (name: IconNames) => <IconFont name={name} />;
function MyTabs() {
  return (
    <Tab.Navigator backBehavior="none" screenOptions={{
      headerBackground: () => (
        <GradientBackground>
          {/* 可选：在这里自定义 Header 的内容 */}
        </GradientBackground>
      )
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: '可乐', tabBarIcon: () => TabBarIcon('icon-heimao') }} />
      <Tab.Screen name="Home1" component={HomeScreen} options={{ tabBarLabel: '布丁', tabBarIcon: () => TabBarIcon('icon-nainiumao') }} />
      <Tab.Screen name="Home2" component={NormalScreen} options={{ tabBarLabel: '罐头', tabBarIcon: () => TabBarIcon('icon-sanhuamao') }} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{ tabBarLabel: '蘑菇', tabBarIcon: () => TabBarIcon('icon-xianluomao') }} />
      <Tab.Screen name="ThemeTestScreen" component={ThemeTestScreen} options={{ tabBarLabel: '比鲁斯', tabBarIcon: () => TabBarIcon('icon-wumaomao') }} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function RootStack() {
  const { state } = useAuth();
  return (
    <Stack.Navigator>
      {state.isLoading ? (
        // We haven't finished checking for the token yet
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : state.userToken == null ? (
        // No token found, user isn't signed in
        <>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              title: 'Sign in',
              // When logging out, a pop animation feels intuitive
              animationTypeForReplace: state.isSignout ? 'pop' : 'push',
            }}
          />
        </>
      ) : (
        // User is signed in
        <>
          <Stack.Screen name="TabScreen" component={MyTabs} options={{ headerShown: false }} />
          <Stack.Screen name="File" component={SafeScreen} options={{ headerShown: false }} />
        </>
      )}
      <Stack.Group navigationKey={state.userToken ? 'user' : 'guest'}>
        <Stack.Screen name="Help" component={HomeScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export const MainNavigator = () => {
  const { appliedTheme } = useTheme();
  const linking: any = {
    prefixes: [
      /* your linking prefixes */
      'mychat://',
      'https://mychat.com',
      'https://*.mychat.com',
    ],
    filter: (url: string) => !url.includes('+expo-auth-session'),
    config: {
      /* configuration for matching screens with paths */
      screens: {
        TabScreen: {
          screens: {
            ThemeTestScreen: 'feed/:sort',
          },
        },
        File: 'file',
        Help: 'user',
        // Profile1: {
        //   path: 'user/:id/:section?',
        //   parse: {
        //     id: (id: string) => id.replace(/^@/, ''),
        //   },
        //   stringify: {
        //     id: (id: string) => `@${id}`,
        //   },
        // },
        // NotFound: {
        //   path: '*',
        // },

      },
    },
    // getStateFromPath: (path, options) => {
    //   console.log(path, options, 'getStateFromPath');

    //   // Return a state object here
    //   // You can also reuse the default logic by importing `getStateFromPath` from `@react-navigation/native`
    // },
    // getPathFromState(state, config) {
    //   console.log(state, config, 'getStateFromPath');
    //   // Return a path string here
    //   // You can also reuse the default logic by importing `getPathFromState` from `@react-navigation/native`
    // },
  };
  return (
    <AuthProvider>
      <NavigationContainer theme={appliedTheme} linking={linking} fallback={<Text>Loading...</Text>}>
        <DrawerProvider>
          <RootStack />
        </DrawerProvider>
      </NavigationContainer>
    </AuthProvider>
  );
};

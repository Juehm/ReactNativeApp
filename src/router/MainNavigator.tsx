import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ThemeTestScreen from '../view/themetest';
import ProfileScreen from '../view/profile';
import HomeScreen from '../view/home';
import IconFont from '../assets/iconfont';
import React from 'react';
import { Platform, useColorScheme } from 'react-native';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator backBehavior='none'>
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: '可乐', tabBarIcon: () => <IconFont name='icon-heimao' /> }} />
      <Tab.Screen name="Home1" component={HomeScreen} options={{ tabBarLabel: '布丁', tabBarIcon: () => <IconFont name='icon-nainiumao' /> }} />
      <Tab.Screen name="Home2" component={HomeScreen} options={{ tabBarLabel: '罐头', tabBarIcon: () => <IconFont name='icon-sanhuamao' /> }} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{ tabBarLabel: '蘑菇', tabBarIcon: () => <IconFont name='icon-xianluomao' /> }} />
      <Tab.Screen name="ThemeTestScreen" component={ThemeTestScreen} options={{ tabBarLabel: '比鲁斯', tabBarIcon: () => <IconFont name='icon-wumaomao' /> }} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={MyTabs} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

const WEB_FONT_STACK =
  'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
  fonts: Platform.select({
    web: {
      regular: {
        fontFamily: WEB_FONT_STACK,
        fontWeight: '400' as any,
      },
      medium: {
        fontFamily: WEB_FONT_STACK,
        fontWeight: '500' as any,
      },
      bold: {
        fontFamily: WEB_FONT_STACK,
        fontWeight: '600' as any,
      },
      heavy: {
        fontFamily: WEB_FONT_STACK,
        fontWeight: '700' as any,
      },
    },
    ios: {
      regular: {
        fontFamily: 'System',
        fontWeight: '400' as any,
      },
      medium: {
        fontFamily: 'System',
        fontWeight: '500' as any,
      },
      bold: {
        fontFamily: 'System',
        fontWeight: '600' as any,
      },
      heavy: {
        fontFamily: 'System',
        fontWeight: '700' as any,
      },
    },
    default: {
      regular: {
        fontFamily: 'sans-serif',
        fontWeight: 'normal' as any,
      },
      medium: {
        fontFamily: 'sans-serif-medium',
        fontWeight: 'normal' as any,
      },
      bold: {
        fontFamily: 'sans-serif',
        fontWeight: '600' as any,
      },
      heavy: {
        fontFamily: 'sans-serif',
        fontWeight: '700' as any,
      },
    },
  }),
};


export const MainNavigator = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'light' ? DarkTheme : DefaultTheme}>
      <RootStack />
    </NavigationContainer>
  );
};

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ThemeTestScreen from '../view/themetest';
import ProfileScreen from '../view/profile';
import HomeScreen from '../view/home';
import IconFont from '../assets/iconfont';
import React from 'react';
import { useTheme } from '../theme/ThemeContext';

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

export const MainNavigator = () => {
  const { appliedTheme } = useTheme();
  return (
    <NavigationContainer theme={appliedTheme}>
      <RootStack />
    </NavigationContainer>
  );
};

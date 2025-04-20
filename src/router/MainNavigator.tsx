import { NavigationContainer } from '@react-navigation/native';
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
import { StyleSheet } from 'react-native';

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
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabScreen" component={MyTabs} options={{ headerShown: false }} />
      <Stack.Screen name="File" component={SafeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}


export const MainNavigator = () => {
  const { appliedTheme } = useTheme();
  return (
    <NavigationContainer theme={appliedTheme}>
      <DrawerProvider>
        <RootStack />
      </DrawerProvider>
    </NavigationContainer>
  );
};

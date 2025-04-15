import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../view/profile';
import HomeScreen from '../view/home';
import IconFont from '../assets/iconfont';
import {useTheme} from '../theme/ThemeContext';

// 将 tabBarIcon 定义为独立的组件
const tabBarIcon = (name: any) => () => <IconFont name={name} />;
export const MainNavigator = () => {
  const {theme} = useTheme();

  const MyTabs = createBottomTabNavigator({
    backBehavior: 'none',
    screenOptions: {
      headerStyle: {backgroundColor: theme === 'dark' ? '#181818' : '#ffffff'},
      headerTintColor: theme === 'dark' ? '#ffffff' : '#181818',
      tabBarStyle: {
        backgroundColor: theme === 'dark' ? '#181818' : '#ffffff',
      },
      sceneStyle: {
        backgroundColor: '#1f1f1f', // 动态设置页面背景颜色
      },
      headerShown: true,
    },
    tabBar: undefined,
    screens: {
      Home: {
        screen: HomeScreen,
        options: {
          tabBarLabel: '可乐',
          tabBarActiveTintColor: theme === 'dark' ? '#ffffff' : '#181818',
          tabBarIcon: tabBarIcon('icon-heimao'),
        },
      },
      Home1: {
        screen: HomeScreen,
        options: {
          tabBarLabel: '布丁',
          tabBarActiveTintColor: '#333333',
          tabBarIcon: tabBarIcon('icon-nainiumao'),
        },
      },
      Home2: {
        screen: HomeScreen,
        options: {
          tabBarLabel: '罐头',
          tabBarActiveTintColor: '#fdb64a',
          tabBarIcon: tabBarIcon('icon-sanhuamao'),
        },
      },
      Profile: {
        screen: ProfileScreen,
        options: {
          tabBarLabel: '蘑菇',
          tabBarActiveTintColor: '#9d7a6f',
          tabBarIcon: tabBarIcon('icon-xianluomao'),
        },
      },
      Profile1: {
        screen: ProfileScreen,
        options: {
          tabBarLabel: '比鲁斯',
          tabBarActiveTintColor: '#ffd4d4',
          tabBarIcon: tabBarIcon('icon-wumaomao'),
        },
      },
    },
  });

  const RootStack = createNativeStackNavigator({
    screenOptions: {
      headerStyle: {backgroundColor: '#1f1f1f'},
      headerTintColor: '#ffffff',
      contentStyle: {
        backgroundColor: '#1f1f1f', // 动态设置页面背景颜色
      },
    },
    screens: {
      TabsScreens: {
        screen: MyTabs,
        options: {
          headerShown: false,
        },
      },
      File: ProfileScreen,
    },
  });

  const Navigation = createStaticNavigation(RootStack);

  return <Navigation />;
};

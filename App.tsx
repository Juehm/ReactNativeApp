import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from './src/view/profile';
import HomeScreen from './src/view/home';
import IconFont from './src/assets/iconfont';
import {ThemeProvider} from './src/theme/ThemeContext';

const MyTabs = createBottomTabNavigator({
  backBehavior: 'none',
  screenOptions: {
    headerStyle: { backgroundColor: '#1f1f1f'},
    headerTintColor: '#ffffff',
  },
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        tabBarLabel: '可乐',
        tabBarActiveTintColor: '#000000',
        tabBarIcon: () => <IconFont name="icon-heimao" />,
        headerBackVisible: true,
      },
    },
    Home1: {
      screen: HomeScreen,
      options: {
        tabBarLabel: '布丁',
        tabBarActiveTintColor: '#333333',
        tabBarIcon: () => <IconFont name="icon-nainiumao" />,
      },
    },
    Home2: {
      screen: HomeScreen,
      options: {
        tabBarLabel: '罐头',
        tabBarActiveTintColor: '#fdb64a',
        tabBarIcon: () => <IconFont name="icon-sanhuamao" />,
      },
    },
    Profile: {
      screen: ProfileScreen,
      options: {
        tabBarLabel: '蘑菇',
        tabBarActiveTintColor: '#9d7a6f',
        tabBarIcon: () => <IconFont name="icon-xianluomao" />,
      },
    },
    Profile1: {
      screen: ProfileScreen,
      options: {
        tabBarLabel: '比鲁斯',
        tabBarActiveTintColor: '#ffd4d4',
        tabBarIcon: () => <IconFont name="icon-wumaomao" />,
      },
    },
  },
});


const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerStyle: { backgroundColor: '#1f1f1f'},
  },
  screens: {
    TabsScreens: {
      screen: MyTabs,
      options: {
        headerShown: false,
      },
    },
  },
});

export default function App() {
const Navigation = createStaticNavigation(RootStack);

  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}

// const MainNavigator = () => {
//   const { theme } = useTheme();

//   // 定义导航栏的主题
//   const navigationTheme = {
//     dark: theme === 'dark',
//     colors: {
//       background: theme === 'dark' ? '#000000' : '#ffffff',
//       text: theme === 'dark' ? '#ffffff' : '#000000',
//       primary: theme === 'dark' ? '#1f1f1f' : '#f5f5f5',
//     },
//   };

//   return (
//     <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: navigationTheme.colors.background }, headerTintColor: navigationTheme.colors.text }}>
//       <Stack.Screen name="Home" component={HomeScreen} />
//     </Stack.Navigator>
//   );
// };

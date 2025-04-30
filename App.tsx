import { ThemeProvider } from './src/provider/theme/ThemeContext';
import { MainNavigator } from './src/router/MainNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BootSplash from 'react-native-bootsplash';
import { useEffect } from 'react';
import { Linking } from 'react-native';

export default function App() {
  
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
      const url = await Linking.getInitialURL(); // 获取冷启动时的链接
      alert(url); // 处理链接
      
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, []);
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

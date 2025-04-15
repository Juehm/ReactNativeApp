import {ThemeProvider} from './src/theme/ThemeContext';
import {MainNavigator} from './src/router/MainNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

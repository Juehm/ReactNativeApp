import {ThemeProvider} from './src/theme/ThemeContext';
import { MainNavigator } from './src/router/MainNavigator';
export default function App() {
  return (
    <ThemeProvider>
      <MainNavigator />
    </ThemeProvider>
  );
}
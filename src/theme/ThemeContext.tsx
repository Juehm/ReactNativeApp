import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance } from 'react-native';

// 定义主题类型
type Theme = 'light' | 'dark';

// 定义 Context 的类型
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// 创建 ThemeContext
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 定义存储键
const THEME_STORAGE_KEY = 'app_theme';

// 提供 ThemeProvider
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemTheme = Appearance.getColorScheme(); // 'light' 或 'dark'
  const [theme, setTheme] = useState<Theme>(systemTheme || 'light'); // 默认主题为浅色

  // 切换主题并持久化
  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme); // 持久化主题
  };

  // 初始化主题（从存储中加载）
  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      if (storedTheme) {
        setTheme(storedTheme as Theme);
      }
    };
    loadTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 自定义 Hook，便于使用
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

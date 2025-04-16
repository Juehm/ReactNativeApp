import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance, useColorScheme } from 'react-native';
import themeConfig from './themeConfig';

// 定义主题类型
type ThemeType = 'system' | 'light' | 'dark' | 'custom';

// 定义 Context 的类型
interface ThemeContextType {
  themeType: ThemeType;
  setThemeType: (type: ThemeType) => void;
  appliedTheme: any;
}

// 创建 ThemeContext
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 定义存储键
const THEME_STORAGE_KEY = 'app_theme';

// 提供 ThemeProvider
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemColorScheme = useColorScheme(); // 获取系统颜色模式
  const [themeType, setTheme] = useState<ThemeType>('system'); // 默认主题为系统主题
  const [appliedTheme, setAppliedTheme] = useState<any>('system'); // 默认主题配置

  // 切换主题并持久化
  const setThemeType = async (newTheme: ThemeType) => {
    setTheme(newTheme);
    await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme); // 持久化主题
  };

  // 根据 themeType 更新 appliedTheme
  useEffect(() => {
    const updateTheme = () => {
      const key = themeType === 'system' ? Appearance.getColorScheme() as ThemeType : themeType;
      setAppliedTheme(themeConfig[key] as any); // 更新主题配置
    };
    updateTheme();
  }, [themeType, systemColorScheme]);

  // 初始化主题（从存储中加载）
  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
      if (storedTheme) { setTheme(storedTheme as ThemeType); }
    };
    loadTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ themeType, appliedTheme, setThemeType }}>
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

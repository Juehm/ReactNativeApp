import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTheme } from '../provider/theme/ThemeContext';
import { ScaledSheet } from 'react-native-size-matters';
import { useAuth } from '../provider/auth/AuthContext';

const HomeScreen = () => {
  const { themeType, setThemeType } = useTheme();
  const { signOut } = useAuth()
  return (
    <View style={styles.container}>
      <Text>当前主题：{themeType}</Text>
      <Button title="切换到系统主题" onPress={() => setThemeType('system')} />
      <Button title="切换到浅色主题" onPress={() => setThemeType('light')} />
      <Button title="切换到深色主题" onPress={() => setThemeType('dark')} />
      <Button title="切换到自定义主题" onPress={() => setThemeType('custom')} />
      <Button title="退出登录" onPress={() => signOut()} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

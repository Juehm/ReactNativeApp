import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

const HomeScreen = () => {
  const { themeType, setThemeType } = useTheme();

  return (
    <View style={styles.container}>
      <Text>当前主题：{themeType}</Text>
      <Button title="切换到系统主题" onPress={() => setThemeType('system')} />
      <Button title="切换到浅色主题" onPress={() => setThemeType('light')} />
      <Button title="切换到深色主题" onPress={() => setThemeType('dark')} />
      <Button title="切换到自定义主题" onPress={() => setThemeType('custom')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

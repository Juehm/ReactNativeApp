import React from 'react';
import { View, Text, Button } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { lightTheme, darkTheme } from '../theme/styles';

const HomeScreen = () => {
  const { theme, toggleTheme } = useTheme();

  // 根据当前主题选择样式
  const styles = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>当前主题：{theme}</Text>
      <Button title="切换主题" onPress={toggleTheme} />
    </View>
  );
};

export default HomeScreen;

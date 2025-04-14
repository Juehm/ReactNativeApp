import { StyleSheet } from 'react-native';

// 定义浅色主题样式
export const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
  },
});

// 定义深色主题样式
export const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
  },
});

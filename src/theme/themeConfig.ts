import { Platform } from 'react-native';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

const WEB_FONT_STACK =
  'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export default {
  dark: DarkTheme,
  light: DefaultTheme,
  MyTheme: {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
    fonts: Platform.select({
      web: {
        regular: {
          fontFamily: WEB_FONT_STACK,
          fontWeight: '400' as any,
        },
        medium: {
          fontFamily: WEB_FONT_STACK,
          fontWeight: '500' as any,
        },
        bold: {
          fontFamily: WEB_FONT_STACK,
          fontWeight: '600' as any,
        },
        heavy: {
          fontFamily: WEB_FONT_STACK,
          fontWeight: '700' as any,
        },
      },
      ios: {
        regular: {
          fontFamily: 'System',
          fontWeight: '400' as any,
        },
        medium: {
          fontFamily: 'System',
          fontWeight: '500' as any,
        },
        bold: {
          fontFamily: 'System',
          fontWeight: '600' as any,
        },
        heavy: {
          fontFamily: 'System',
          fontWeight: '700' as any,
        },
      },
      default: {
        regular: {
          fontFamily: 'sans-serif',
          fontWeight: 'normal' as any,
        },
        medium: {
          fontFamily: 'sans-serif-medium',
          fontWeight: 'normal' as any,
        },
        bold: {
          fontFamily: 'sans-serif',
          fontWeight: '600' as any,
        },
        heavy: {
          fontFamily: 'sans-serif',
          fontWeight: '700' as any,
        },
      },
    }),
  },
} as any;


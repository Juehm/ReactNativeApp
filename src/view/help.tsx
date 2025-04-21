import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function MyButton(props) {
  const { colors } = useTheme();
  console.log(props, 'props');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity style={{ backgroundColor: colors.card }}>
        <Text style={{ color: colors.text }}>登录或未登录都可访问，且登录状态发生改变时，相应页面跳转逻辑</Text>
      </TouchableOpacity>
    </View>
  );
}

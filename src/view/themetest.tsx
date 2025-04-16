import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function MyButton(props) {
  const { colors } = useTheme();
  console.log(props, 'props');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity style={{ backgroundColor: colors.card }}>
        <Text style={{ color: colors.text }}>Button!</Text>
      </TouchableOpacity>
    </View>
  );
}

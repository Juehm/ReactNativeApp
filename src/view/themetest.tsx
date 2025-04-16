import {Text, TouchableOpacity, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default function MyButton() {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity style={{backgroundColor: colors.card}}>
        <Text style={{color: colors.text}}>Button!</Text>
      </TouchableOpacity>
    </View>
  );
}

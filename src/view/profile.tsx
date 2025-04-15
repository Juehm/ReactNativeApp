import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Profile: React.FC = (props): React.JSX.Element => {
  const insets = useSafeAreaInsets();
  console.log(props, 'navigation');
  const navigation = useNavigation()
  return (
    <View
      style={{paddingTop: insets.top}}>
      <Text>This is top text.</Text>
      <Text>This is bottom text.</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('File')} />
    </View>
  );
};


export default Profile;

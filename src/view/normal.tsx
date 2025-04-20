import React from 'react';
import { View, Button } from 'react-native';
import { useDrawer } from '../provider/drawer/DrawerContext';

const Profile: React.FC = (): React.JSX.Element => {
  const { openDrawer } = useDrawer();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => openDrawer()} title='Open right drawer' />
    </View>
  );
};


export default Profile;

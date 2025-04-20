import React, { ReactNode } from 'react';
import { Button, Text, View } from 'react-native';
import { Drawer } from 'react-native-drawer-layout';

// 定义 Context 的类型
interface DrawerContextType {
  openDrawer: () => void;
  closeDrawer: () => void;
};

const DrawerContext = React.createContext<DrawerContextType | undefined>(undefined);

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const [DrawerOpen, setDrawerOpen] = React.useState(false);

  const value = React.useMemo(() => ({
    openDrawer: () => setDrawerOpen(true),
    closeDrawer: () => setDrawerOpen(false),
  }), []);

  return (
    <Drawer
      open={DrawerOpen}
      onOpen={() => setDrawerOpen(true)}
      onClose={() => setDrawerOpen(false)}
      drawerType="slide"
      drawerStyle={{ backgroundColor: '#1f1f1f', width: '75%' }}
      renderDrawerContent={() => (
      <View style={{ flex: 1, padding: 16 }}>
        <Text style={{ color: '#ffffff' }}>Drawer Content</Text>
        <Button title="Close Drawer" onPress={() => setDrawerOpen(false)} />
      </View>
      )}
    >
      <DrawerContext.Provider value={value}>
      {children}
      </DrawerContext.Provider>
    </Drawer>
  );
}

// 自定义 Hook，便于使用
export const useDrawer = () => {
  const context = React.useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
};
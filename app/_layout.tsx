import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const unstable_settings = {
  initialRouteName: "toall", // Начальный экран
};

export default function AppLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerStyle: { backgroundColor: '#282b30' }, 
        swipeEdgeWidth: 100,
        drawerType: 'slide',
        drawerActiveTintColor: '#7289da', 
        drawerInactiveTintColor: '#fff', 
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="toall"
        options={{
          headerShown: false,
          drawerLabel: 'Главная',
          drawerIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="tonot-bought"
        options={{
          headerShown: false,
          drawerLabel: 'Не купленные',
          drawerIcon: ({ color, size }) => (
            <Icon name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="tobought"
        options={{
          headerShown: false,
          drawerLabel: 'Купленные',
          drawerIcon: ({ color, size }) => (
            <Icon name="check" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name='(tabs)'
        options={{ drawerItemStyle: { display: 'none' } }}
      />
      <Drawer.Screen
        name='index'
        options={{ drawerItemStyle: { display: 'none' } }}
      />
    </Drawer>
  );
}

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 20, alignItems: 'center', borderBottomWidth: 1, borderColor: '#4f545c', marginBottom: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>Навигация</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
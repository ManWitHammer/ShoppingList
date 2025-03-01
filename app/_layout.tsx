import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTabs from '../components/HomeTabs';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: { backgroundColor: '#282b30' }, // Тёмный фон для drawer
        swipeEdgeWidth: 100,
        drawerType: 'slide',
        drawerActiveTintColor: '#7289da', // Основной цвет Discord для активного элемента
        drawerInactiveTintColor: '#fff', // Белый цвет для неактивных элементов
      }}
    >
      <Drawer.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{
          headerShown: false,
          drawerLabel: 'Главная',
          drawerIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="PendingTabs"
        component={HomeTabs}
        initialParams={{ screen: 'Pending' }}
        options={{
          headerShown: false,
          drawerLabel: 'Не купленные',
          drawerIcon: ({ color, size }) => (
            <Icon name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="PurchasedTabs"
        component={HomeTabs}
        initialParams={{ screen: 'Purchased' }}
        options={{
          headerShown: false,
          drawerLabel: 'Купленные',
          drawerIcon: ({ color, size }) => (
            <Icon name="check-circle" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
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
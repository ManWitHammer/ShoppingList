import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import AllScreen from '../app/(tabs)/all';
import PendingScreen from '../app/(tabs)/not-bought';
import PurchasedScreen from '../app/(tabs)/bought';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={{ marginLeft: 15 }}
          >
            <Icon name="menu" size={24} color="#fff" /> 
          </TouchableOpacity>
        ),
        tabBarStyle: { backgroundColor: '#282b30' },
        tabBarActiveTintColor: '#7289da',
        tabBarInactiveTintColor: '#888', 
        headerStyle: { backgroundColor: '#282b30' },
        headerTintColor: '#fff', 
      }}
    >
      <Tab.Screen
        name="All"
        component={AllScreen}
        options={{
          title: "Все",
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Pending"
        component={PendingScreen}
        options={{
          title: "Корзина",
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Purchased"
        component={PurchasedScreen}
        options={{
          title: "Купленные",
          tabBarIcon: ({ color, size }) => (
            <Icon name="check" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
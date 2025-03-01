import React from 'react';
import { Tabs } from 'expo-router/tabs';
import { useNavigation } from "expo-router"
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign'; // Импортируем AntDesign
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomeTabs() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#282b30',
          paddingBottom: insets.bottom,
        },
        tabBarActiveTintColor: '#7289da',
        tabBarInactiveTintColor: '#888', 
        headerStyle: { backgroundColor: '#282b30' },
        headerTintColor: '#fff', 
      }}
    >
      <Tabs.Screen
        name="all"
        options={{
          title: 'Все',
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="not-bought"
        options={{
          title: 'Корзина',
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-cart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bought"
        options={{
          title: 'Куплено',
          tabBarIcon: ({ color }) => (
            <Icon name="check" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
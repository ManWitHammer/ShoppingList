import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import AllScreen from '../app/all';
import PendingScreen from '../app/not-bought';
import PurchasedScreen from '../app/bought';

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
            <MaterialIcons name="menu" size={24} color="#fff" /> 
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
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Pending"
        component={PendingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="pending-actions" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Purchased"
        component={PurchasedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="done" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
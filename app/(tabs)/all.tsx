import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ShoppingList from '../../components/ItemList';
import AddItem from '../../components/addItem';

export default function AllItems() {
  return (
      <View style={styles.container}>
        <ShoppingList filter="all" />
        <AddItem/>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
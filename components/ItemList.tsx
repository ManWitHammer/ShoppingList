import React, { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import ShoppingItem from './item'
import useShoppingStore from '../store/store'

interface ShoppingListProps {
  filter?: 'all' | 'pending' | 'purchased'
}

const ShoppingList: React.FC<ShoppingListProps> = ({ filter }) => {
  const items = useShoppingStore((state) => state.items)
  const [filteredItems, setFilteredItems] = useState(items)

  useEffect(() => {
    let result
    switch (filter) {
      case 'pending':
        result = items.filter((item) => !item.purchased)
        break
      case 'purchased':
        result = items.filter((item) => item.purchased)
        break
      default:
        result = items
    }
    setFilteredItems(result) 
  }, [items, filter]) 

  if (filteredItems.length === 0) {
    return (
      <View style={styles.newContainer}>
        <Text style={styles.emptyText}>Список покупок пуст</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredItems}
        renderItem={({ item }) => (
          <ShoppingItem id={item.id} name={item.name} purchased={item.purchased} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#282b30',
  },
  newContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282b30', 
  },
  emptyText: {
    color: '#fff', 
  },
})
export default ShoppingList
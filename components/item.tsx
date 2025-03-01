import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import useShoppingStore from '../store/store'

interface ShoppingItemProps {
  id: string
  name: string
  purchased: boolean
}

const ShoppingItem: React.FC<ShoppingItemProps> = ({ id, name, purchased }) => {
  const toggleItem = useShoppingStore((state) => state.toggleItem)
  const removeItem = useShoppingStore((state) => state.removeItem)

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => toggleItem(id)}>
        <MaterialIcons
          name={purchased ? 'check-box' : 'check-box-outline-blank'}
          size={24}
          color="#fff" 
        />
      </TouchableOpacity>
      <Text style={[styles.itemName, purchased && styles.purchased]}>{name}</Text>
      <TouchableOpacity onPress={() => removeItem(id)}>
        <MaterialIcons name="delete" size={24} color="#f04747" /> 
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#4f545c', 
    backgroundColor: '#36393f', 
    borderRadius: 5,
    marginBottom: 5,
  },
  itemName: {
    flex: 1,
    marginLeft: 10,
    color: '#fff', 
  },
  purchased: {
    textDecorationLine: 'line-through',
    color: '#888', 
  },
})

export default ShoppingItem
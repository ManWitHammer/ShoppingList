import React from 'react'
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native'
import useShoppingStore from '../store/store'

const ShoppingList: React.FC = () => {
  const [newItemName, setNewItemName] = React.useState('')
  const addItem = useShoppingStore((state) => state.addItem)

  const handleAddItem = () => {
    if (newItemName) {
      addItem(newItemName)
      setNewItemName('')
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Новый товар"
        placeholderTextColor="#888"
        value={newItemName}
        onChangeText={setNewItemName}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
        <Text style={styles.addButtonText}>Добавить</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#36393f', 
    padding: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#7289da', 
    padding: 8,
    marginRight: 10,
    color: '#fff', 
  },
  addButton: {
    backgroundColor: '#7289da',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})

export default ShoppingList
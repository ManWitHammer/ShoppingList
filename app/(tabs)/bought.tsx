import { View, StyleSheet } from 'react-native';
import ShoppingList from '../../components/ItemList';

export default function PurchasedItems() {
  return (

      <View style={styles.container}>
        <ShoppingList filter="purchased" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
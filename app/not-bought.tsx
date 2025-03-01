import { View, StyleSheet } from 'react-native';
import ShoppingList from '../components/ItemList';

export default function PendingItems() {
  return (
      <View style={styles.container}>
        <ShoppingList filter="pending" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
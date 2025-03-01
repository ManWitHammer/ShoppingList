import { create } from 'zustand';
import uuid from 'react-native-uuid';

interface ShoppingItem {
  id: string;
  name: string;
  purchased: boolean;
}

interface ShoppingStore {
  items: ShoppingItem[];
  addItem: (name: string) => void;
  toggleItem: (id: string) => void;
  removeItem: (id: string) => void;
  getItemsByFilter: (filter?: 'all' | 'pending' | 'purchased') => ShoppingItem[];
}

const useShoppingStore = create<ShoppingStore>((set, get) => ({
  items: [],
  addItem: (name) =>
    set((state) => ({
      items: [...state.items, { id: uuid.v4(), name, purchased: false }],
    })),
  toggleItem: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id ? { ...item, purchased: !item.purchased } : item
      ),
    })),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  getItemsByFilter: (filter) => {
    const items = get().items;
    switch (filter) {
      case 'pending':
        return items.filter((item) => !item.purchased);
      case 'purchased':
        return items.filter((item) => item.purchased);
      default:
        return items;
    }
  },
}));

export default useShoppingStore;
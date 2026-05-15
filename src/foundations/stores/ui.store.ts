import { create } from 'zustand';

interface UIStore {
  selectedStatus: string;
  search: string;

  setSearch: (value: string) => void;
  setSelectedStatus: (value: string) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  selectedStatus: 'all',
  search: '',

  setSearch: (value) => set({ search: value }),

  setSelectedStatus: (value) =>
    set({ selectedStatus: value }),
}));
import { create } from "zustand";

type Store = {
  count: number;
  inc: (number: number) => void;
};

export const useStore = create<Store>()((set) => ({
  count: 1,
  // how to take input arg and then increment the count
  inc: (number) => set((state) => ({ count: state.count + number })),
}));

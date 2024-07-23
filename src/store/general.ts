import { count } from "console";
import { create } from "zustand";

type Store = {
  count: number;
};

export const useCounterState = create<Store>(() => ({
  count: 0,
}));

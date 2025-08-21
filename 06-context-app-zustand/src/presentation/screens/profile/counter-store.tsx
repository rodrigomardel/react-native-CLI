import { create } from "zustand";

export interface CounterStore {
  count: number;
  incrementBy: (value: number) => void;
  reset: () => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  incrementBy: (value: number) => set((state) => ({ count: state.count + value })),
  reset: () => set({ count: 0 }),
}));


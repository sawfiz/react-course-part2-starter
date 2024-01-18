import { create } from "zustand";

// Define the shape of the store
interface CounterStore {
  counter: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  increment: () => set((store) => ({ counter: store.counter + 1 })),
  reset: () => set(() => ({ counter: 0 })),
}));

export default useCounterStore;

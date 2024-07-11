import { create } from "zustand";

export interface StoreState {
  rank: number;
  percentile: number;
  score: number;
}

export interface StoreActions {
  updateState(newState: Partial<StoreState>): void;
}

interface IStore {
  state: StoreState;
  actions: StoreActions;
}

export const initialState = {
  rank: 1,
  percentile: 30,
  score: 10,
} satisfies StoreState;

export const useStore = create<IStore>((set) => ({
  state: initialState,
  actions: {
    updateState(newState) {
      set(({ state }) => ({ state: { ...state, ...newState } }));
    },
  },
}));

export const useStoreState = () => useStore(({ state }) => state);
export const useStoreActions = () => useStore(({ actions }) => actions);

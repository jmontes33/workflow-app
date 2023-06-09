import { create } from "zustand";

export interface Values {
  user: object;
  setUser: (newUser: object) => void;
}

export const useValuesStore = create<Values>((set, get) => ({
  user: {},
  setUser: (newUser) => set({ user: newUser }),
}));

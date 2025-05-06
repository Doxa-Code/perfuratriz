import { create } from "zustand";

type Store<T> = {
  register: T | null;
  setRegister(register: T | null): void;
};

export const useRegisterEdit = create<Store<any>>((set) => ({
  register: null,
  setRegister(register) {
    set({ register });
  },
}));

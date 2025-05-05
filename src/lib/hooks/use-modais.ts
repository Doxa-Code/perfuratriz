import { create } from "zustand";

type Store = {
  modais: Set<string>;
  toggleModal(modalName: string, value?: boolean): void;
  isOpen(modalName: string): boolean;
};

export const useModais = create<Store>((set, get) => ({
  modais: new Set<string>(),
  toggleModal(modalName, value) {
    const { modais } = get();
    const action =
      typeof value !== "undefined"
        ? value
          ? "add"
          : "delete"
        : modais.has(modalName)
        ? "delete"
        : "add";

    modais[action](modalName);

    set({
      modais: new Set(modais),
    });
  },
  isOpen(modalName) {
    const { modais } = get();
    return modais.has(modalName);
  },
}));

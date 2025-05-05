import type { NCM } from "@/core/domain/entities/ncm";
import { create } from "zustand";

type Store = {
  ncm: NCM.Props | null;
  setNCM(ncm: NCM.Props | null): void;
};

export const useNCM = create<Store>((set) => ({
  ncm: null,
  setNCM(ncm) {
    set({ ncm });
  },
}));

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { StoreProps } from "@/store/store.interface";

export const useStore = create<StoreProps>()(
  devtools(
    persist(
      (set) => ({
        isHeaderMini: false,
        setIsHeaderMini: (bool) => set((state) => ({ ...state, isHeaderMini: bool })),
      }),
      { name: "kku-storage" }, // persist key
    ),
  ),
);

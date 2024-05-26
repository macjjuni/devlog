import { create } from "zustand";
import { devtools } from "zustand/middleware";
// persist

interface BearState {
  isHeaderMini: boolean;
  setIsHeaderMini: (bool: boolean) => void;
}

export const useStore = create<BearState>()(
  devtools(
    // persist(
    (set) => ({
      isHeaderMini: false,
      setIsHeaderMini: (bool) => set(() => ({ isHeaderMini: bool })),
    }),
    // {
    //   name: "bear-storage", // persist key
    // },
    // ),
  ),
);

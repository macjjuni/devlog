import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { StoreProps } from "@/store/store.interface";

export const useStore = create<StoreProps>()(
  devtools(
    persist(
      (set) => ({
        isHeaderMini: false,
        setIsHeaderMini: (bool) => set(() => ({ isHeaderMini: bool })),
        btcChart: {
          1: { date: [], price: [], timeStamp: 0 },
          7: { date: [], price: [], timeStamp: 0 },
          30: { date: [], price: [], timeStamp: 0 },
          365: { date: [], price: [], timeStamp: 0 },
        },
        setBtcChart: (day, data) => set((state) => ({
          btcChart: { ...state.btcChart, [day]: data },
        })),
        realTimeMarketPriceUSD: "",
        setRealTimeMarketPriceUSD: (realTimeMarketPriceUSD) => set(() => ({ realTimeMarketPriceUSD })),
        searchHistory: [],
        setSearchHistory: (searchHistory) => set(() => ({ searchHistory })),
      }),
      { name: "kku-storage" }, // persist key
    ),
  ),
);

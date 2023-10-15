import { create } from 'zustand'
// import { persist } from 'zustand/middleware'
import { type ColorTypes } from '@/@types/theme'
import { dark, light } from '@/@types/theme'
import type { IModal } from '@/@types/common'

interface IStore {
  // - Light & Dark Mode
  color: ColorTypes | null
  toggleColor: () => void
  setColorMode: (color: ColorTypes) => void
  // - Header Show & Hide
  isMiniHeader: boolean
  setMiniHeader: (hide: boolean) => void
  // - Navigation Show & Hide (only Mobile)
  isNav: boolean
  setNav: (hide: boolean) => void
  // - Modal State
  modal: IModal
  setModal: (modal: IModal) => void
  // - Input Disabled
  disabled: boolean
  setDisabled: (isDisabled: boolean) => void
  // - BitCoin Market PRice
  btc: string
  setBtc: (price: string) => void
  // - Search loading Status
  search: boolean
  setSearch: (isSearch: boolean) => void
}

const useStore = create<IStore>()(
  // persist(
  (set) => ({
    color: null,
    toggleColor: () =>
      set((state) => {
        const getColor = state.color === light ? dark : light
        return { color: getColor }
      }),
    setColorMode: (color) => set(() => ({ color })),
    isMiniHeader: false,
    setMiniHeader: (isMini) => set(() => ({ isMiniHeader: isMini })),
    isNav: false,
    setNav: (isNav) => set(() => ({ isNav })),
    modal: { key: null, func: undefined },
    setModal: (modal) => set(() => ({ modal })),
    disabled: false,
    setDisabled: (isDisabled) => set(() => ({ disabled: isDisabled })),
    btc: '100000',
    setBtc: (price) => set(() => ({ btc: price })),
    search: false,
    setSearch: (isSearch) => set(() => ({ search: isSearch })),
  }),
  //   { name: 'macjjuni' },
  // ),
)

export default useStore

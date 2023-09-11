import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type ColorTypes } from '@/types/theme'
import { dark, light } from '@/types/theme'

interface IStore {
  color: ColorTypes | null
  toggleColor: () => void
  setColorMode: (color: ColorTypes) => void
}

const useStore = create<IStore>()(
  persist(
    (set) => ({
      color: null,
      toggleColor: () =>
        set((state) => {
          const getColor = state.color === light ? dark : light
          return { color: getColor }
        }),
      setColorMode: (color) => set(() => ({ color })),
    }),
    { name: 'macjjuni' },
  ),
)

export default useStore

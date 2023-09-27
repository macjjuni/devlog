import { create } from 'zustand'
// import { persist } from 'zustand/middleware'
import { type ColorTypes } from '@/types/theme'
import { dark, light } from '@/types/theme'

interface IStore {
  // - Light & Dark Mode
  color: ColorTypes | null
  toggleColor: () => void
  setColorMode: (color: ColorTypes) => void
  // - Header Show & Hide
  isHide: boolean
  setHide: (hide: boolean) => void
  // - Modal State
  isModal: boolean
  setModal: (isShow: boolean) => void
  // - Input Disabled
  disabled: boolean
  setDisabled: (isDisabled: boolean) => void
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
    isHide: false,
    setHide: (hide) => set(() => ({ isHide: hide })),
    isModal: false,
    setModal: (isShow) => set(() => ({ isModal: isShow })),
    disabled: false,
    setDisabled: (isDisabled) => set(() => ({ disabled: isDisabled })),
  }),
  //   { name: 'macjjuni' },
  // ),
)

export default useStore

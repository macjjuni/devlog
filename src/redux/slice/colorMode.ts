import { createSlice } from '@reduxjs/toolkit'
import { ColorModeTypes } from 'type/theme'

export const light: ColorModeTypes = 'light'
export const dark: ColorModeTypes = 'dark'

interface IColorMode {
  theme: ColorModeTypes
}
const initialState: IColorMode = {
  theme: null,
}

export const colorModeSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: 'colorMode',
  initialState,
  reducers: {
    toggle: (state: IColorMode) => {
      if (state.theme === light) state.theme = dark
      else state.theme = light
    },
    setLight: (state: IColorMode) => {
      state.theme = light
    },
    setDark: (state: IColorMode) => {
      state.theme = dark
    },
  },
  /* eslint-enable no-param-reassign */
})

export const { toggle, setLight, setDark } = colorModeSlice.actions

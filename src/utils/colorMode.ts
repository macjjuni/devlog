import { dark, light } from 'redux/slice/colorMode'
import { ColorModeTypes } from 'types/theme'

type ThemeTypes = 'light' | 'dark'
const key = 'colorMode'

export const theme = {
  // OS 테마 다크모드인지 체크
  isDark() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  },
  getColorMode(): ColorModeTypes {
    const colorMode = localStorage.getItem(key) as ColorModeTypes
    return colorMode
  },
  setColorMode(colorMode: ThemeTypes) {
    localStorage.setItem(key, colorMode)
  },
  initialColorMode(): ThemeTypes {
    const colorMode = this.getColorMode()
    if (colorMode === null) {
      if (this.isDark()) {
        this.setColorMode(dark)
        return dark
      }
      this.setColorMode(light)
      return light
    }
    this.setColorMode(colorMode)
    return colorMode
  },
}

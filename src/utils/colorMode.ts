import { ColorModeTypes } from 'type/theme'

// 컬러모드 표현방식 :: html 태그의 속성 이름과 로컬스토리지 key 값으로 사용
export const colorSchema = 'theme'

const colorMode = {
  localStorage: {
    getColorMode: (): ColorModeTypes => {
      const mode = localStorage.getItem(colorSchema) as ColorModeTypes | null
      return mode === null ? 'light' : mode
    },
    setColorMode: (mode: ColorModeTypes) => {
      document.documentElement.setAttribute(colorSchema, mode)
      localStorage.setItem(colorSchema, mode)
    },
  },
  getColorMode: (): ColorModeTypes => {
    const mode = (document.documentElement.getAttribute(colorSchema) as ColorModeTypes) || null
    if (mode !== null) return mode
    return 'light'
  },
  isDark: () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  },
  setColorMode: (mode: ColorModeTypes) => {
    document.documentElement.setAttribute(colorSchema, mode)
    localStorage.setItem(colorSchema, mode)
  },
  initColorMode: () => {
    const mode = colorMode.localStorage.getColorMode()
    if (mode === null) {
      if (colorMode.isDark()) {
        colorMode.setColorMode('dark')
        return
      }
      colorMode.setColorMode('light')
    } else {
      if (mode === 'light') {
        colorMode.setColorMode('light')
        return
      }
      colorMode.setColorMode('dark')
    }
  },
  themeToggle: () => {
    const currentColorMode = colorMode.getColorMode()
    if (currentColorMode === 'dark') {
      colorMode.setColorMode('light')
      return
    }
    colorMode.setColorMode('dark')
  },
}

export default colorMode

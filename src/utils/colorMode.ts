import { dark, light, type ColorTypes } from '@/types/theme'
import useStore from '@/store'

const { getState } = useStore

const storageKey = 'theme'

const lightColor = '#ffffff'
const darkColor = '#1B1D1F'

const colorMode = {
  getColorMode: () => {
    // 현재 저장된 컬러모드 가져오기
    return localStorage.getItem(storageKey)
  },
  setColor: (theme: ColorTypes) => {
    localStorage.setItem(storageKey, theme)
    if (theme === dark) {
      document.documentElement.classList.add(dark)
      colorMode.setMetaThemeColor(darkColor)
      getState().setColorMode(dark)
      return
    }
    document.documentElement.classList.remove(dark)
    colorMode.setMetaThemeColor(lightColor)
    getState().setColorMode(light)
  },
  initColor: () => {
    // 컬러모드 초기화
    const savedTheme = colorMode.getColorMode()
    // 첫 진입
    if (savedTheme === null) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        colorMode.setColor(dark)
        return
      } else {
        colorMode.setColor(light)
      }
    }
    // 여러번 진입
    if (savedTheme === light) {
      colorMode.setColor(light)
    } else {
      colorMode.setColor(dark)
    }
  },
  toggleColorMode: () => {
    // 컬러모드 토글
    const savedTheme = colorMode.getColorMode()
    if (savedTheme === dark) {
      colorMode.setColor(light)
    } else {
      colorMode.setColor(dark)
    }
  },
  setMetaThemeColor: (hexCode: string) => {
    const themeColor: HTMLMetaElement | null = document.querySelector("meta[name='theme-color']")
    if (themeColor !== null) themeColor.content = hexCode
  },
}

export default colorMode

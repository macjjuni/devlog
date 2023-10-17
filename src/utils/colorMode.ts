import { dark, light, type ColorTypes } from '@/@types/theme'
import useStore from '@/store'

const { getState } = useStore

export const storageKey = 'theme'

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
      getState().setColorMode(dark)
      colorMode.setMetaThemeColor(darkColor)
      return
    }
    document.documentElement.classList.remove(dark)
    getState().setColorMode(light)
    colorMode.setMetaThemeColor(lightColor)
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
    const themeColorEle: HTMLMetaElement | null = document.querySelector("meta[name='theme-color']")
    if (themeColorEle == null) return
    themeColorEle.setAttribute('content', hexCode)
  },
}

export default colorMode

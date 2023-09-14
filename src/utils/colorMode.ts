import { dark, light } from '@/types/theme'
import theme from '@/styles/theme'
import useStore from '@/store'

const { getState } = useStore
const lightColor = theme.color.lightBg
const darkColor = theme.color.darkBg

const colorMode = {
  initColor: () => {
    // 컬러모드 초기화
    const { color } = getState()
    if (color === null) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        getState().setColorMode(dark)
        document.documentElement.dataset.theme = dark
        colorMode.setMetaThemeColor(darkColor)
        return
      }
      // document.documentElement.classList.remove(dark)
      document.documentElement.dataset.theme = light
      colorMode.setMetaThemeColor(lightColor)
      return
    } else if (color === light) {
      getState().setColorMode(light)
      document.documentElement.dataset.theme = light
      colorMode.setMetaThemeColor(lightColor)
      return
    }
    getState().setColorMode(dark)
    document.documentElement.dataset.theme = dark
    colorMode.setMetaThemeColor(darkColor)
  },
  toggleColorMode: () => {
    // 컬러모드 토글
    const { color, setColorMode } = getState()

    if (color === dark) {
      getState().setColorMode(light)
      document.documentElement.dataset.theme = light
      colorMode.setMetaThemeColor(lightColor)
      return
    }
    setColorMode(dark)
    document.documentElement.dataset.theme = dark
    colorMode.setMetaThemeColor(darkColor)
  },
  setMetaThemeColor: (hexCode: string) => {
    const themeColor: HTMLMetaElement | null = document.querySelector("meta[name='theme-color']")
    if (themeColor !== null) themeColor.content = hexCode
  },
}

export default colorMode

import { dark, light } from '@/types/theme'
import useStore from '@/store'

const { getState } = useStore

const colorMode = {
  initColor: () => {
    // 컬러모드 초기화
    const { color } = getState()
    if (color === null) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add(dark)
        getState().setColorMode(dark)
        return
      }
      document.documentElement.classList.remove(dark)
      getState().setColorMode(light)
      return
    } else if (color === light) {
      document.documentElement.classList.remove(dark)
      getState().setColorMode(light)
      return
    }
    document.documentElement.classList.add(dark)
    getState().setColorMode(dark)
  },
  toggleColorMode: () => {
    // 컬러모드 토글
    const { color, setColorMode } = getState()

    if (color === dark) {
      document.documentElement.classList.remove(dark)
      getState().setColorMode(light)
      return
    }
    document.documentElement.classList.add(dark)
    setColorMode(dark)
  },
  setMetaThemeColor: (hexCode: string) => {
    const themeColor: HTMLMetaElement | null = document.querySelector("meta[name='theme-color']")
    if (themeColor !== null) themeColor.content = hexCode
  },
}

export default colorMode

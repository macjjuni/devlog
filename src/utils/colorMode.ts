export type ModeTypes = 'light' | 'dark'
export type ModeReturnTypes = 'light' | 'dark' | null

export const colorSchema = 'theme'

const saveColorMode = () => localStorage.getItem(colorSchema)
const isDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches

const setColorMode = (mode: ModeTypes) => {
  document.documentElement.setAttribute(colorSchema, mode)
  localStorage.setItem(colorSchema, mode)
}

export const getColorMode = (): ModeReturnTypes => {
  return document.documentElement.getAttribute(colorSchema) as ModeReturnTypes
}

export const initColorMode = () => {
  const colorMode = saveColorMode()
  if (!colorMode) {
    if (isDark()) {
      setColorMode('dark')
      return
    }
    setColorMode('light')
    return
  }
  if (colorMode === 'light') {
    setColorMode('light')
    return
  }
  setColorMode('dark')
}

export const themeToggle = () => {
  const currentColorMode = document.documentElement.getAttribute(colorSchema)
  if (currentColorMode === 'dark') {
    setColorMode('light')
    return
  }
  setColorMode('dark')
}

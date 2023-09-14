import { useLayoutEffect, useEffect } from 'react'
import { ThemeProvider as StyledProvider } from 'styled-components'
import GlobalStyle from '@/styles/global'
// import useStore from '@/store'
import theme from '@/styles/theme'
import colorMode from '@/utils/colorMode'

const MultiEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // const color = useStore((state) => state.color)

  MultiEffect(() => {
    colorMode.initColor()
  }, [])

  return (
    <StyledProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledProvider>
  )
}

export default ThemeProvider

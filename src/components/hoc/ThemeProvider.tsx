import { ThemeProvider as StyledProvider } from 'styled-components'
// import useStore from '@/store'
import theme from '@/styles/theme'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // const color = useStore((state) => state.color)

  return <StyledProvider theme={theme}>{children}</StyledProvider>
}

export default ThemeProvider

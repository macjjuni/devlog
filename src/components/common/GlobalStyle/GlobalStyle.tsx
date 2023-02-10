import { useAppSelector } from 'redux/hook'
import { GlobalCSS } from 'styles/globals'

const GlobalStyle = () => {
  const colorMode = useAppSelector((state) => state.colorMode.theme)
  return <GlobalCSS colorMode={colorMode} />
}

export default GlobalStyle

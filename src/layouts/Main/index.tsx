import HeaderObserver from '@/components/atom/HeaderObserver'
import MainStyled from './style'

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainStyled>
      <HeaderObserver />
      {children}
    </MainStyled>
  )
}

export default Main

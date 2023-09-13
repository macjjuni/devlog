import MainStyled from './style'
import HeaderObserver from '@/components/atom/HeaderObserver'

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainStyled>
      <HeaderObserver />
      {children}
    </MainStyled>
  )
}

export default Main

import { type ReactNode, useState } from 'react'
import Voxel from 'components/views/Voxel'
import * as L from './Layout.style'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Layout = ({ children }: { children: ReactNode }) => {
  const [load, setLoad] = useState(false)
  const doneLoad = () => {
    setLoad(true)
  }

  return (
    <L.Layout>
      <Header />
      <Voxel load={load} doneLoad={doneLoad} />
      <Main>{children}</Main>
      <Footer />
    </L.Layout>
  )
}

export default Layout

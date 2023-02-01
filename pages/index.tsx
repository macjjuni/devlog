import type { NextPage } from 'next'
import { IndexLayout } from './style'

// import dynamic from 'next/dynamic'

// const Voxel = dynamic(() => import('../src/components/Voxel'), {
//   ssr: false,
// })

const Home: NextPage = () => {
  return (
    <IndexLayout>
      <h2>Index Page</h2>
      {/* <Voxel /> */}
    </IndexLayout>
  )
}

export default Home

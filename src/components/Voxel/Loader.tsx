// import styled from 'styled-components'
import { Html, useProgress } from '@react-three/drei'
import { useEffect } from 'react'

const Loader = () => {
  const { progress } = useProgress()
  useEffect(() => {
    console.log(progress)
  }, [progress])
  return <Html center>{progress} %</Html>
}

export default Loader

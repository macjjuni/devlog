import { useRouter } from 'next/router'
import { useEffect } from 'react'

const index = () => {
  const { replace } = useRouter()

  useEffect(() => {
    replace('/blog')
  }, [])

  return null
}

export default index

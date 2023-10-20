import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Category() {
  const { replace } = useRouter()

  useEffect(() => {
    replace('/blog')
  }, [])

  return null
}

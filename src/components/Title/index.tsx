import Head from 'next/head'
import { useEffect, useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { router } from '../../router'

const useMultiEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
const mainTitle = process.env.NEXT_PUBLIC_TITLE as string

const Titles = () => {
  const [htmlTitle, setTitle] = useState(mainTitle)

  const { route } = useRouter()
  useMultiEffect(() => {
    const page = router.find((rou) => rou.path === route)
    if (page) {
      setTitle(`${mainTitle} - ${page.title}`)
      return
    }
    setTitle(`${mainTitle} - 404 Not Found`)
  }, [route])

  return (
    <Head>
      <title>{htmlTitle}</title>
    </Head>
  )
}
export default Titles

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import type { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from 'react-notion-x'
import PageCover from './components/PageCover'

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code), { ssr: false })
const Collection = dynamic(() => import('react-notion-x/build/third-party/collection').then((m) => m.Collection))
const Equation = dynamic(() => import('react-notion-x/build/third-party/equation').then((m) => m.Equation))

interface INotionRender {
  recordMap: ExtendedRecordMap
  coverUrl: string
}

const NotionRender = ({ recordMap, coverUrl }: INotionRender) => {
  const { push } = useRouter()

  const goBack = async () => {
    await push('/blog', '', { scroll: true })
  }

  const appendTocLink = () => {
    const tocWrap = document.getElementsByClassName('notion-aside-table-of-contents-header')[0] as HTMLDivElement
    const tocList = document.getElementsByClassName('notion-table-of-contents')[0] as HTMLDivElement

    if (!tocWrap || !tocList) return
    tocWrap.textContent = '📋 목차'
    const links = {
      comment: document.createElement('a'),
      pages: document.createElement('a'),
    }
    // key값 배열로 저장
    const linkKeys = Object.keys(links) as Array<keyof typeof links>

    links.comment.textContent = '💬 댓글'
    links.pages.textContent = '📚 글 목록'
    links.pages.onclick = goBack

    linkKeys.forEach((key) => {
      links[key].className = 'notion-table-of-contents-item notion-table-of-contents-item-indent-level-0'
    })
    tocList.appendChild(links.comment)
    tocList.appendChild(links.pages)
  }

  useEffect(() => {
    appendTocLink()
    // console.log(recordMap)
  }, [])

  return (
    <NotionRenderer
      className="w-full px-md md:px-lg"
      fullPage
      disableHeader
      showTableOfContents
      pageCover={coverUrl !== '' && <PageCover url={coverUrl} alt="123" />}
      minTableOfContentsItems={1}
      recordMap={recordMap}
      components={{
        propertyDateValue: (dateProperty) => dateProperty.data[0][1][0][1].start_date,
        nextImage: Image,
        nextLink: Link,
        Code,
        Collection,
        Equation,
      }}
    />
  )
}

export default NotionRender

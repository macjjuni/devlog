import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import type { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from 'react-notion-x'

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code), { ssr: false })
const Collection = dynamic(() => import('react-notion-x/build/third-party/collection').then((m) => m.Collection))
const Equation = dynamic(() => import('react-notion-x/build/third-party/equation').then((m) => m.Equation))

interface INotionRender {
  recordMap: ExtendedRecordMap
}

const NotionRender = ({ recordMap }: INotionRender) => {
  const { push } = useRouter()

  const goBack = async (e: React.MouseEvent) => {
    e.preventDefault()
    await push('/blog', '', { scroll: true })
  }

  useEffect(() => {
    const tocDom = document.getElementsByClassName('notion-aside-table-of-contents-header')[0] as HTMLElement
    if (tocDom) tocDom.textContent = '📋 목차'
  }, [])

  return (
    <NotionRenderer
      pageCover={<></>}
      minTableOfContentsItems={1}
      disableHeader
      recordMap={recordMap}
      fullPage
      pageAside={
        <div>
          <a href="#">💬 댓글</a>
          <a href="#" onClick={goBack}>
            📚 글 목록
          </a>
        </div>
      }
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

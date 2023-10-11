import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import type { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from 'react-notion-x'

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code), { ssr: false })
const Collection = dynamic(() => import('react-notion-x/build/third-party/collection').then((m) => m.Collection))
const Equation = dynamic(() => import('react-notion-x/build/third-party/equation').then((m) => m.Equation))

interface INotionRender {
  recordMap: ExtendedRecordMap
}

export default function ProjectRender({ recordMap }: INotionRender) {
  return (
    <NotionRenderer
      className="w-full max-w-layout px-md md:px-lg"
      fullPage
      disableHeader
      pageCover={<></>}
      minTableOfContentsItems={0}
      recordMap={recordMap}
      components={{
        nextImage: Image,
        nextLink: Link,
        Code,
        Collection,
        Equation,
      }}
    />
  )
}

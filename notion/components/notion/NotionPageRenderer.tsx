import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { useAppSelector } from 'redux/hook'
import { dark } from 'redux/slice/colorMode'
import { defaultMapImageUrl, NotionRenderer } from 'react-notion-x'
import type { ExtendedRecordMap } from 'notion-types'

const Code = dynamic(() => import('react-notion-x/build/third-party/code').then((m) => m.Code))
const Collection = dynamic(() => import('react-notion-x/build/third-party/collection').then((m) => m.Collection))
const Equation = dynamic(() => import('react-notion-x/build/third-party/equation').then((m) => m.Equation))

interface NotionPageRendererProps {
  recordMap: ExtendedRecordMap
}

const NotionPageRenderer = ({ recordMap }: NotionPageRendererProps) => {
  const colorMode = useAppSelector((state) => state.colorMode.theme)
  return (
    <NotionRenderer
      recordMap={recordMap}
      showTableOfContents
      fullPage
      darkMode={colorMode === dark}
      disableHeader
      previewImages={!!recordMap?.signed_urls[0]}
      minTableOfContentsItems={1}
      mapImageUrl={(url, block) => {
        return defaultMapImageUrl(url, block) ?? url
      }}
      components={{
        nextImage: Image,
        nextLink: Link,
        Code,
        Collection,
        Equation,
        // Modal,
      }}
    />
  )
}

export default NotionPageRenderer

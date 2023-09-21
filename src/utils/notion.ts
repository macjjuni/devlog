import type { Block } from 'notion-types'

const notionUrl = 'https://www.notion.so'

const generateCoverUrl = (block: Block) => {
  if (!block.format) return ''
  try {
    const originUrl = block.format.page_cover
    const filteredUrl = originUrl.charAt(0) === '/' ? notionUrl + originUrl : originUrl
    return `https://www.notion.so/image/${encodeURIComponent(filteredUrl)}?table=block&id=${block?.id}&cache=v2`
  } catch {
    return ''
  }
}

export default generateCoverUrl

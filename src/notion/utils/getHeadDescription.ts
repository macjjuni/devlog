import type { ExtendedRecordMap, Role, Block } from 'notion-types'
import { getPageContentBlockIds, getBlockTitle } from 'notion-utils'

interface ICleanBlock {
  role: Role
  value: Block
}

const cotainsType = ['header', 'sub_header', 'text']

export const getHeadDescription = (recordMap: ExtendedRecordMap) => {
  const blocks = getPageContentBlockIds(recordMap)

  const blockArr = blocks.map((blockId) => {
    if (cotainsType.includes(recordMap.block[blockId].value.type) && recordMap.block[blockId].value.properties) return recordMap.block[blockId]
  })

  // undefined 제외하고 성능 향상을 위해 블럭 5개 까지만 남기기
  const cleanBlockArr = blockArr.filter((block): block is ICleanBlock => block !== undefined).slice(0, 5)

  let contentText = ''
  // 문자열 없는 경우 빈 문자열 반환
  if (cleanBlockArr.length === 0) return contentText

  // 있는 경우 모두 합쳐서 100 글자 까지만 남기고 반환
  for (let i = 0; i < cleanBlockArr.length; i++) {
    const getBlcokText = getBlockTitle(cleanBlockArr[i].value, recordMap)
    contentText += `${getBlcokText} `
  }
  return contentText.substring(0, 100)
}

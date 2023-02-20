import type { ExtendedRecordMap, Role, Block } from 'notion-types'
import { getPageContentBlockIds, getBlockTitle } from 'notion-utils'

interface ICleanBlock {
  role: Role
  value: Block
}

export const getHeadDescription = (recordMap: ExtendedRecordMap) => {
  const blocks = getPageContentBlockIds(recordMap)
  const blockArr = blocks.map((blockId) => {
    if (recordMap.block[blockId].value.type === 'text' && recordMap.block[blockId].value.properties) return recordMap.block[blockId]
  })
  // undefined랑 Value에 값 여부 체크
  const cleanBlockArr = blockArr.filter((block) => block && block.value) as ICleanBlock[]

  let contentText = ''
  // 성능 향상을 위해 최대 5개 까지만 텍스트 가져오기
  const loopLength = blockArr.length < 5 ? blockArr.length : 5

  // 문자열 없는 경우 빈 문자열 리턴
  if (cleanBlockArr !== undefined && cleanBlockArr.length === 0) return contentText

  // 있는 경우 모두 합쳐서 100 글자 까지만 남기고 리턴
  for (let i = 0; i < loopLength; i++) {
    if (cleanBlockArr[i] === undefined) {
      const getBlcokText = getBlockTitle(cleanBlockArr[i].value, recordMap)
      contentText += getBlcokText
    }
  }
  return contentText.substring(0, 100)
}

import type { ITag } from 'notion/types/types'
import { COLOR_TABLE } from 'styles/notion/notion.style'
import * as T from './tag.style'

const TagItem = ({ name, color }: ITag) => {
  return <T.TagButton bgColor={COLOR_TABLE[color]}>&#35;{name}</T.TagButton>
}

export default TagItem

import { useAppSelector } from 'redux/hook'
import { COLOR_TABLE } from '../../../config'
import * as T from './Tag.style'
import type { ITag } from '../../../types/types'

const TagItem = ({ name, color }: ITag) => {
  const colorMode = useAppSelector((state) => state.colorMode.theme)
  return (
    <T.TagButton colormode={colorMode} style={{ backgroundColor: COLOR_TABLE[color] }}>
      &#35;{name}
    </T.TagButton>
  )
}

export default TagItem

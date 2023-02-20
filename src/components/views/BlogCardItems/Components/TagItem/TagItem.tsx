import { useAppSelector } from 'redux/hook'
import { COLOR_TABLE } from '../../../../../notion/config'
import * as T from './TagItem.style'
import type { ITag } from '../../../../../notion/types/types'

const TagItem = ({ name, color }: ITag) => {
  const colorMode = useAppSelector((state) => state.colorMode.theme)
  return (
    <T.TagButton colormode={colorMode} style={{ backgroundColor: COLOR_TABLE[color] }}>
      &#35;{name}
    </T.TagButton>
  )
}

export default TagItem

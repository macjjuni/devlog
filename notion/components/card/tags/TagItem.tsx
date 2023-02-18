import { useAppSelector } from 'redux/hook'
import { COLOR_TABLE } from '../../../config'
import * as T from './Tag.style'

interface TagItemProps {
  name: string
  color: keyof typeof COLOR_TABLE
}

const TagItem = ({ name, color }: TagItemProps) => {
  const colorMode = useAppSelector((state) => state.colorMode.theme)
  return (
    <T.TagButton colormode={colorMode} style={{ backgroundColor: COLOR_TABLE[color] }}>
      &#35;{name}
    </T.TagButton>
  )
}

export default TagItem

import { COLOR_TABLE } from '../../../config'
import * as T from './Tag.style'

interface TagItemProps {
  name: string
  color: keyof typeof COLOR_TABLE
}

const TagItem = ({ name, color }: TagItemProps) => {
  return <T.TagButton style={{ backgroundColor: COLOR_TABLE[color] }}>&#35;{name}</T.TagButton>
}

export default TagItem

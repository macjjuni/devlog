import * as T from './Tag.style'
import TagItem from './TagItem'
import type { CardData } from '../../../types/types'

interface TagListProps {
  tags: CardData['tags']
}

const TagList = ({ tags }: TagListProps) => {
  return (
    <T.TagList>
      {tags.map(({ id, name, color }, index) => (
        <T.TagItem
          key={id}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: (index + 1) * 0.1,
          }}
          viewport={{
            once: true,
          }}
        >
          <TagItem name={name} color={color} />
        </T.TagItem>
      ))}
    </T.TagList>
  )
}

export default TagList

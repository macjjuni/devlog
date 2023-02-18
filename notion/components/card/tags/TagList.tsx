import * as T from './Tag.style'
import TagItem from './TagItem'
import type { CardData } from '../../../types/types'

const MotionAnimation = {
  initial: {
    opacity: 0,
    y: 8,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: { once: true },
}

const TagList = ({ tags }: { tags: CardData['tags'] }) => {
  return (
    <T.TagList>
      {tags.map(({ id, name, color }, index) => (
        <T.TagItem
          key={id}
          {...MotionAnimation}
          transition={{
            duration: 0.3,
            delay: (index + 1) * 0.08,
          }}
        >
          <TagItem name={name} color={color} />
        </T.TagItem>
      ))}
    </T.TagList>
  )
}

export default TagList

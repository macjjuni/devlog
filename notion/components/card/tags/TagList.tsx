import * as T from './Tag.style'
import TagItem from './TagItem'
import type { ICard } from '../../../types/types'

const MotionAnimation = {
  initial: {
    opacity: 0,
    y: 30,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
}

const TagList = ({ tags }: { tags: ICard['tags'] }) => {
  return (
    <T.TagList>
      {tags.map(({ id, name, color }, index) => (
        <T.TagItem
          key={id}
          {...MotionAnimation}
          transition={{
            duration: 0.3,
            delay: (index + 1) * 0.03,
          }}
        >
          <TagItem name={name} color={color} />
        </T.TagItem>
      ))}
    </T.TagList>
  )
}

export default TagList

import { motion } from 'framer-motion'
import TagItem from './TagItem'
import { CardData } from '../../../types/types'

interface TagListProps {
  tags: CardData['tags']
}

const TagList = ({ tags }: TagListProps) => {
  return (
    <ul className="flex flex-row flex-wrap gap-2">
      {tags.map(({ id, name, color }, index) => (
        <motion.li
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
        </motion.li>
      ))}
    </ul>
  )
}

export default TagList

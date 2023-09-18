import { type IPage } from '@/types/notion'
import { motion } from 'framer-motion'
import { postListMotion } from '@/utils/framer'
import PostItem from './components/PostItem'

const defaultSttyle = `w-full`

const PostList = ({ list }: { list: IPage[] }) => {
  return (
    <motion.ul className={defaultSttyle} initial="hidden" animate="show" variants={postListMotion}>
      {list.map((item) => (
        <PostItem key={item.id} page={item} />
        // <Book key={item.id} page={item} />
      ))}
    </motion.ul>
  )
}

export default PostList

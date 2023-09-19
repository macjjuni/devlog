import { type IPage } from '@/types/notion'
import { motion } from 'framer-motion'
import { postListMotion } from '@/utils/framer'
import PostItem from './components/PostItem'

interface IPostList {
  list: IPage[]
}

const defaultSttyle = `w-full`

const PostList = ({ list }: IPostList) => {
  return (
    <motion.div className={defaultSttyle} initial="hidden" animate="show" variants={postListMotion}>
      {list.map((item) => (
        <PostItem key={item.id} page={item} />
      ))}
    </motion.div>
  )
}

export default PostList

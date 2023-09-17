import { type IPage } from '@/types/notion'
import { postListMotion } from '@/utils/framer'
// import Book from '@/components/molecule/Book'
import PostItem from './components/PostItem'
import PostStyled from './style'

const PostList = ({ list }: { list: IPage[] }) => {
  return (
    <PostStyled.List initial="hidden" animate="show" variants={postListMotion}>
      {list.map((item) => (
        <PostItem key={item.id} page={item} />
        // <Book key={item.id} page={item} />
      ))}
    </PostStyled.List>
  )
}

export default PostList

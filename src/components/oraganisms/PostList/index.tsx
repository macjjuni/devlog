import { type IPost } from '@/types/notion'
import { useRef, type WheelEvent } from 'react'
import { postListMotion } from '@/utils/framer'
import Book from '@/components/molecule/Book'
import PostStyled from './style'
// import PostItem from './components/PostItem'

const PostList = ({ list }: { list: IPost[] }) => {
  const listRef = useRef<HTMLDivElement | null>(null)

  const onWheel = (e: WheelEvent<HTMLElement>) => {
    if (listRef.current !== null) listRef.current.scrollLeft += e.deltaY
  }

  return (
    <PostStyled.List initial="hidden" animate="visible" variants={postListMotion} ref={listRef} onWheel={onWheel} className="no-scroll">
      {list.map((item) => (
        // <PostItem key={item.id} post={item} />
        <Book key={item.id} post={item} />
      ))}
    </PostStyled.List>
  )
}

export default PostList

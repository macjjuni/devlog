import { type IPage } from '@/types/notion'
import { useRef, type WheelEvent } from 'react'
import { postListMotion } from '@/utils/framer'
import Book from '@/components/molecule/Book'
// import PostItem from './components/PostItem'
import PostStyled from './style'

const PostList = ({ list }: { list: IPage[] }) => {
  const listRef = useRef<HTMLDivElement | null>(null)

  const onWheel = (e: WheelEvent<HTMLElement>) => {
    if (listRef.current !== null) listRef.current.scrollLeft += e.deltaY
  }

  return (
    <PostStyled.List initial="hidden" animate="show" variants={postListMotion} ref={listRef} onWheel={onWheel} className="no-scroll">
      {list.map((item) => (
        // <PostItem key={item.id} page={item} />
        <Book key={item.id} page={item} />
      ))}
    </PostStyled.List>
  )
}

export default PostList

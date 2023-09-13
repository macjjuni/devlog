import { useRef, type WheelEvent } from 'react'
import { motion } from 'framer-motion'
import { postListMotion } from '@/utils/framer'

import PostItem from '@/components/molecule/PostItem'
import styled from '@emotion/styled'
import { type IPost } from '@/types/notion'

const PostListStyled = styled(motion.section)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: start;
  align-items: center;
  overflow-y: auto;

  gap: ${({ theme }) => theme.size.xxl};
  margin-bottom: ${({ theme }) => theme.size.max};
  margin-right: -${({ theme }) => theme.size.max};
  padding: ${({ theme }) => theme.size.xl};
`

const PostList = ({ list }: { list: IPost[] }) => {
  const listRef = useRef<HTMLDivElement | null>(null)

  const onWheel = (e: WheelEvent<HTMLElement>) => {
    if (listRef.current !== null) listRef.current.scrollLeft += e.deltaY
  }

  return (
    <PostListStyled initial="hidden" animate="visible" variants={postListMotion} ref={listRef} onWheel={onWheel} className="no-scroll">
      {list.map((item) => (
        <PostItem key={item.id} post={item} />
      ))}
    </PostListStyled>
  )
}

export default PostList

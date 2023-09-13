import PostItemStyled from './style'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { type IPost } from '@/types/notion'
import Button from '@/components/atom/Button'

import Title from './components/Title'
import Date from './components/date'
import Svg from './components/Svg'
import Cate from './components/Cate'
import { postItemMotion } from '@/utils/framer' // Framer Motion

const PostItem = ({ post }: { post: IPost }) => {
  return (
    <PostItemStyled.Wrap variants={postItemMotion}>
      <PostItemStyled.Link href="/#" category={post.category}>
        <PostItemStyled.TopWrap>
          <Cate text={post.category} />
          <Button icon={<BiDotsVerticalRounded fontSize="32" color="#fff" />} />
        </PostItemStyled.TopWrap>
        <Title text={post.title} />
        <Date text={post.date} />
        <Svg text={post.category} />
      </PostItemStyled.Link>
    </PostItemStyled.Wrap>
  )
}
export default PostItem

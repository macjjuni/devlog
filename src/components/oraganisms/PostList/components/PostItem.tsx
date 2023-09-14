import { postItemMotion } from '@/utils/framer' // Framer Motion
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { type IPost } from '@/types/notion'
import Button from '@/components/atom/Button'
import PostStyled from '../style'

import Title from './Title'
import Date from './date'
import Svg from './Svg'
import Cate from './Cate'

const PostItem = ({ post }: { post: IPost }) => {
  return (
    <PostStyled.Item variants={postItemMotion}>
      <PostStyled.Link href="/#" category={post.category}>
        <PostStyled.TopWrap>
          <Cate text={post.category} />
          <Button icon={<BiDotsVerticalRounded fontSize="32" color="#fff" />} />
        </PostStyled.TopWrap>
        <Title text={post.title} />
        <Date text={post.date} />
        <Svg text={post.category} />
      </PostStyled.Link>
    </PostStyled.Item>
  )
}
export default PostItem

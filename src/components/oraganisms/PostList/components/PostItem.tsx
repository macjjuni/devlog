import { postItemMotion } from '@/utils/framer' // Framer Motion
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { type IPage } from '@/types/notion'
import Button from '@/components/atom/Button'
import PostStyled from '../style'

import Title from './Title'
import Date from './date'
import Svg from './Svg'
import Cate from './Cate'

const PostItem = ({ page }: { page: IPage }) => {
  return (
    <PostStyled.Item variants={postItemMotion}>
      <PostStyled.Link href="/#" $category={page?.category?.name}>
        <PostStyled.TopWrap>
          <Cate $category={page?.category?.name} />
          <Button icon={<BiDotsVerticalRounded fontSize="32" color="#fff" />} />
        </PostStyled.TopWrap>
        <Title text={page.title} />
        <Date text={page.published} />
        <Svg $category={page?.category?.name} />
      </PostStyled.Link>
    </PostStyled.Item>
  )
}
export default PostItem

import type { IPage } from '@/types/notion'
import Svg from '@/components/oraganisms/PostList/components/Svg'
import { postItemMotion } from '@/utils/framer'
import BookStyled from './style'

const Book = ({ page }: { page: IPage }) => {
  return (
    <BookStyled.Item variants={postItemMotion}>
      <BookStyled.Wrap>
        <BookStyled.Body href="#" $category={page?.category?.name}>
          <BookStyled.LeftSide />
          <BookStyled.TopWrap>
            <BookStyled.Cat>{page?.category?.name}</BookStyled.Cat>
            <BookStyled.Title>{page?.title}</BookStyled.Title>
          </BookStyled.TopWrap>
          <Svg $category={page?.category?.name} />
          <BookStyled.Date>{page?.published}</BookStyled.Date>
        </BookStyled.Body>
        <BookStyled.RightSide $category={page?.category?.name} />
      </BookStyled.Wrap>
    </BookStyled.Item>
  )
}

export default Book

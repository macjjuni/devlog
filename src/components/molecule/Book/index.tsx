import type { IPage } from '@/types/notion'
import { postItemMotion } from '@/utils/framer'
import CategorySvg from '@/components/molecule/CategorySvg'
import NewSvg from './components/NewSvg'
import BookStyled from './style'

const Book = ({ page }: { page: IPage }) => {
  return (
    <BookStyled.Item variants={postItemMotion}>
      <BookStyled.Wrap>
        <BookStyled.Body href="#" $category={page?.category?.name}>
          <NewSvg published={page?.published} color="#FF6969" />
          <BookStyled.LeftSide />

          <BookStyled.TopWrap>
            <BookStyled.Cat $category={page?.category?.name}>{page?.category?.name}</BookStyled.Cat>
            <BookStyled.Title>{page?.title}</BookStyled.Title>
          </BookStyled.TopWrap>

          <BookStyled.Date>{page?.published}</BookStyled.Date>

          <BookStyled.Svg>
            <CategorySvg category={page?.category?.name} />
          </BookStyled.Svg>
        </BookStyled.Body>
        <BookStyled.RightSide $category={page?.category?.name} />
      </BookStyled.Wrap>
    </BookStyled.Item>
  )
}

export default Book

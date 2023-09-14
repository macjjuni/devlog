import { IPost } from '@/types/notion'
import Svg from '@/components/oraganisms/PostList/components/Svg'
import BookStyled from './style'

const Book = ({ post }: { post: IPost }) => {
  return (
    <BookStyled.Item>
      <BookStyled.Body href="#" category={post.category}>
        <BookStyled.Cat>{post.category}</BookStyled.Cat>
        <BookStyled.Title>{post.title}</BookStyled.Title>
        <Svg text={post.category} />
        <BookStyled.Date>{post.date}</BookStyled.Date>
      </BookStyled.Body>
      <BookStyled.Side category={post.category} />
    </BookStyled.Item>
  )
}

export default Book

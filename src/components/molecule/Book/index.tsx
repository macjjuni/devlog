import { IPost } from '@/types/notion'
import BookStyled from './style'

const Book = ({ post }: { post: IPost }) => {
  return (
    <BookStyled.Item>
      <BookStyled.Body>
        <BookStyled.Title>{post.title}</BookStyled.Title>
      </BookStyled.Body>
      <BookStyled.Side />
    </BookStyled.Item>
  )
}

export default Book

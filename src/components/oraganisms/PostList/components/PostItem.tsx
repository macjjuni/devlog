import config from '@/config/notion.config'
import { type IPage } from '@/types/notion'
import { postItemMotion } from '@/utils/framer' // Framer Motion
import PostStyled from '../style'

const { blog } = config

const PostItem = ({ page }: { page: IPage }) => {
  return (
    <PostStyled.Item variants={postItemMotion}>
      <PostStyled.Link href={`${blog.postPath}/${page?.id}`} $category={page?.category?.name}>
        <PostStyled.Cat>{page?.category?.name}</PostStyled.Cat>
        <PostStyled.Title>{page?.title}</PostStyled.Title>
        <PostStyled.Date>{page?.published}</PostStyled.Date>
        <PostStyled.Tags>
          {page.tags.map((tag) => (
            <PostStyled.TagItem key={tag.id}>#{tag.name}</PostStyled.TagItem>
          ))}
        </PostStyled.Tags>
      </PostStyled.Link>
    </PostStyled.Item>
  )
}
export default PostItem

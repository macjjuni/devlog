import Text from 'components/common/Text'
import Article from './components/Article'
import * as B from './Blog.style'
import { type PostTypes } from '../../../type/blog'

const BlogArticle = ({ posts }: { posts: PostTypes[] }) => {
  return (
    <B.Blog>
      <Text type="h3" variant="heading_md">
        🗒️ Recent posts
      </Text>
      <B.BlogWrap>
        {posts.map((post) => (
          <Article key={post.title} post={post} />
        ))}
      </B.BlogWrap>
    </B.Blog>
  )
}
export default BlogArticle

import type { PostTypes } from 'type/blog'
import Text from 'components/common/Text'
import Article from './components/Article'
import * as B from './Blog.style'

const BlogArticle = ({ posts }: { posts: PostTypes[] }) => {
  return (
    <B.Blog>
      <Text type="h3" variant="heading_md">
        🗒️ 최근 포스트
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

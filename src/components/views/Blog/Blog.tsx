import type { PostTypes } from 'type/blog'
import Text from 'components/common/Text'
import Article from './components/Article'
import * as B from './Blog.style'

const BlogArticle = ({ posts }: { posts: PostTypes[] }) => {
  return (
    <B.Blog>
      <Text type="h2" variant="heading_md">
        🗒️ Recent Posts
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

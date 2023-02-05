import Article from './article'
import { BlogWrap } from './style'
import { type PostTypes } from '../../type/blog'

const BlogArticle = ({ posts }: { posts: PostTypes[] }) => {
  return (
    <BlogWrap>
      {posts.map((post) => (
        <Article key={post.title} x post={post} />
      ))}
    </BlogWrap>
  )
}
export default BlogArticle

import Link from 'next/link'
import { SelectPropertyResponse } from 'notion/types/types'
import { COLOR_TABLE } from 'styles/notion/notion.style'
import * as T from './Category.style'

interface IBlogCategory {
  postCount: number
  category: SelectPropertyResponse[] | undefined
}

const Category = ({ postCount, category }: IBlogCategory) => {
  return (
    <T.CategoryWrap>
      <T.Category>
        <T.CategoryItem bgColor={COLOR_TABLE.default}>
          <Link href="/devlog">전체 글({postCount})</Link>
        </T.CategoryItem>
        {category?.map((item) => (
          <T.CategoryItem key={item.id} bgColor={COLOR_TABLE[item.color]}>
            <Link href={`/category/${item.name}`}>{item.name}</Link>
          </T.CategoryItem>
        ))}
      </T.Category>
    </T.CategoryWrap>
  )
}

export default Category

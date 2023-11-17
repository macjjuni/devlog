import type { IPage, INotionInfo, ICategory } from '@/@types/notion'
import Profile from '@/components/widget/Profile'
import CategoryList from '@/components/widget/CategoryList'
import MarketPrice from '@/components/widget/MarketPrice'
import SocialLink from '@/components/widget/SocialLink'

interface IWidget {
  pages: IPage[]
  info: INotionInfo
  categories: ICategory
}

const Widget = ({ pages, info, categories }: IWidget) => {
  return (
    <>
      <Profile info={info} />

      <div className="flex justify-between items-center md:block my-xl">
        <MarketPrice />
        <SocialLink />
      </div>
      <CategoryList categories={categories} pages={pages} />
    </>
  )
}

export default Widget

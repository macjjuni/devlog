import { useCallback } from 'react'
import { type IPage } from '@/@types/notion'
import Link from 'next/link'
import config from '@/config/notion.config'
import common from '@/styles/common'
import { motion } from 'framer-motion'
import { postItemMotion } from '@/utils/framer' // Framer Motion
import date from '@/lib/date'
import CategorySvg from '@/components/molecule/CategorySvg'
import NewSvg from '@/components/svg/NewSvg'
import { dateReg } from '@/utils/string'

const { blog, post } = config

const PostItem = ({ page }: { page: IPage }) => {
  // 최신 포스트 여부 체크
  const isNew = useCallback(() => post.RECENT_DAY > date.nowDiff(page.published), [page.published])

  return (
    <motion.article variants={postItemMotion} className="flex">
      <Link
        href={`/${blog.POST_PATH}/${page?.id}`}
        className={`page-item relative w-full h-full px-md py-sm md:p-lg mb-lg rounded-xs overflow-hidden border border-BLG200 hover:border-BLG700 dark:hover:border-BLG300 hover:scale-[1.005] hover:rotate-[0.55deg] ${common.textColor} ${common.borderColor} transition-all`}
      >
        <div className="flex justify-between items-center gap-sm h-[40px] text-postCat">
          <h2 className={`flex justify-center items-center gap-sm ${common.textColor}`}>
            {/* 카테고리 아이콘 & 이름 */}
            <CategorySvg category={page?.category?.name} />

            {page?.category?.name}
          </h2>
          {/* 최신글 여부 아이콘 */}
          {isNew() && <NewSvg className="new-icon" width={40} height={40} />}
        </div>
        {/* 포스팅 이름 */}
        <h3 className={`text-postTitle ${common.textColor} text-BLG1000 dark:text-BLG0`}>{page?.title}</h3>
        <div className="flex justify-start items-center gap-lg mt-sm text-body">
          {/* 태그 리스트 */}
          <ul className={`flex gap-md font-light ${common.textColor}`}>
            {page?.tags?.map((tag) => <li key={tag.id} className="text-postTag">{`📌 ${tag.name}`}</li>)}
          </ul>
        </div>
        <div className="flex justify-between items-center mt-xl">
          {/* 포스팅 날짜 */}
          <p className={`font-light ${common.textColor}`}>{dateReg(date.format(page?.published), '-', '.')}</p>
          <p className="page-date text-body font-thin text-right">Read more</p>
        </div>
      </Link>
    </motion.article>
  )
}
export default PostItem

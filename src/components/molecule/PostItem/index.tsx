import { BiDotsVerticalRounded } from 'react-icons/bi'
import { motion } from 'framer-motion'
import Link from 'next/link'

import Title from './components/Title'
import Date from './components/date'
import Svg from './components/Svg'
import Cate from './components/Cate'

import { categoryTheme } from '@/styles/theme'
import { postItemMotion } from '@/utils/framer' // Framer Motion

const PostItem = ({ category }: { category: string }) => {
  const themeKey = categoryTheme.find((cate) => category.toLowerCase().includes(cate.title))

  return (
    <motion.article variants={postItemMotion} className={`post-item m-0 ${themeKey ? themeKey.class : '#000'} shadow-post dark:shadow-postD`}>
      <Link href="/#">
        <Cate text={category} />
        <div className="item-header flex justify-end items-center w-full h-[32px]">
          <button className="" type="button">
            <BiDotsVerticalRounded fontSize="32" color="#fff" />
          </button>
        </div>
        <Title text="This is Title! Just Do it! Hello World Next.js 13 ABCDEFGHIJKLMN" />
        <Date text="2023.09.07" />
        <Svg text={category} />
      </Link>
    </motion.article>
  )
}
export default PostItem

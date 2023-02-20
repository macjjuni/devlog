import type { IBlogData } from 'notion/types/types'
import Image from 'next/image'
import * as B from './BlogBanner.style'

const Banner = ({ data }: { data: IBlogData }) => {
  return (
    <B.Banner>
      <B.TopWrap>
        <Image src={data.coverURL} alt="kku.dev blog top banner image" width={1200} height={330} placeholder="empty" quality={80} priority />
      </B.TopWrap>
      <B.BottomWrap>
        <B.TextWrap>
          <B.BannerIcon>{data.icon}</B.BannerIcon>
          <B.TextBody>{data.title}</B.TextBody>
        </B.TextWrap>
        <B.Description>{data.description}</B.Description>
      </B.BottomWrap>
    </B.Banner>
  )
}

export default Banner

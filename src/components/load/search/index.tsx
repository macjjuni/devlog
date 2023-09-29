import LoadWrap from '@/components/atom/LoadWrap'
import LottieItem from '@/components/atom/LottieItem'
import SearchLottie from '@/assets/lottie/search.json'

// Lottie Option
const defaultOption = {
  loop: true,
  play: true,
  style: { width: '400px', height: '500px' },
}

const SearchLoad = () => {
  return (
    <LoadWrap>
      <LottieItem className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" defaultOption={defaultOption} animationData={SearchLottie} />
    </LoadWrap>
  )
}

export default SearchLoad

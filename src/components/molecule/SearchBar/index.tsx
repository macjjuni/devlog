import { useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { CgArrowRightR } from 'react-icons/cg'
import common from '@/styles/common'
import SearchSvg from '@/components/svg/SearchSvg'

const defaultStyle = `w-[200px] h-[38px] px-sm pl-[38px] pr-[38px] outline-0 border rounded-[6px] ${common.borderColor} ${common.trs} focus:w-[240px]`

const SearchBar = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  const { push, query } = useRouter()

  const onFocus = useCallback(() => {
    if (!searchRef.current) return
    searchRef.current.focus()
  }, [])

  const onSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    if (!searchRef.current) return
    const txt = searchRef.current.value.trim()
    if (txt === '') {
      onFocus()
      return
    }
    if (query?.keyword === txt) return // 검색한 페이지에서 동일한 키워드 검색 제외
    push(`/blog/search/${encodeURIComponent(txt)}`)
  }, [])

  useEffect(() => {
    if (!searchRef.current || !query?.keyword || typeof query.keyword !== 'string') return
    searchRef.current.value = query.keyword
    searchRef.current.blur()
  }, [])

  return (
    <form className="relative" onSubmit={onSubmit}>
      <SearchSvg onClick={onFocus} width={26} height={26} className="absolute top-[50%] translate-y-[-50%] left-[6px] cursor-pointer" />
      <input ref={searchRef} type="text" className={defaultStyle} />
      <button type="submit" className="absolute top-[50%] right-[2px] translate-y-[-50%] flex justify-center items-center w-[36px] h-[36px]">
        <CgArrowRightR fontSize="28" className="text-BLG700" />
      </button>
    </form>
  )
}

export default SearchBar

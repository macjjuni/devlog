import { useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import useStore from '@/store'
import common from '@/styles/common'
import SearchSvg from '@/components/svg/SearchSvg'

const defaultStyle = `search-input w-[160px] h-[38px] px-sm pl-[38px] pr-[36px] outline-0 border bg-[transparent] rounded-[6px] ${common.borderColor} ${common.trs} transition-[width] focus:w-[240px]`
const darkStyle = 'dark:focus:bg-BLG800 dark:focus:border-BLG500'
const styled = `${defaultStyle} ${darkStyle}`

const SearchBar = () => {
  const searchRef = useRef<HTMLInputElement>(null)
  const { push, query } = useRouter()
  const { setSearch } = useStore((state) => state)

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
    setSearch(true)
    push(`/blog/search/${encodeURIComponent(txt)}`)
  }, [])

  useEffect(() => {
    if (!searchRef.current || !query?.keyword || typeof query.keyword !== 'string') return
    searchRef.current.value = query.keyword
    searchRef.current.blur()
  }, [])

  return (
    <form className="relative overflow-hidden" onSubmit={onSubmit}>
      <SearchSvg onClick={onFocus} width={26} height={26} className="absolute top-[50%] translate-y-[-50%] left-[6px] cursor-pointer" />
      <input ref={searchRef} type="text" className={styled} />
      <button
        type="submit"
        className={`search-btn absolute top-xs right-[-50px] flex justify-center items-center w-[30px] h-[30px] text-bodySm border border-BLG400 dark:border-BLG500 rounded-xs transition-[right] ${common.trs}`}
      >
        Go
      </button>
    </form>
  )
}

export default SearchBar

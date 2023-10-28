import { useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import useStore from '@/store'
import common from '@/styles/common'
import { MdManageSearch } from 'react-icons/md'

const defaultStyle = `search-input w-[120px] md:w-[160px] h-[38px] px-sm pl-[38px] outline-0 border bg-[transparent] rounded-xs ${common.borderColor} ${common.textColor} focus:w-[160px] md:focus:w-[240px] focus:border-BLG1000 dark:focus:border-BLG0`
const darkStyle = 'dark:focus:bg-BLG800 dark:focus:border-BLG500'
const styled = `${defaultStyle} ${darkStyle}`

export default function SearchBar() {
  const searchRef = useRef<HTMLInputElement>(null)
  const { push, query } = useRouter()
  const { setSearch } = useStore((state) => state)

  const onFocus = useCallback(() => {
    searchRef.current?.focus()
  }, [])

  const onSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    const txt = searchRef.current?.value.trim() || ''

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
      <MdManageSearch
        onClick={onSubmit}
        fontSize={26}
        className="absolute top-[50%] translate-y-[-50%] left-[6px] cursor-pointer text-BLG600 dark:text-BLG400"
      />
      <input id="search-input" aria-label="Search" ref={searchRef} type="text" className={styled} />
    </form>
  )
}

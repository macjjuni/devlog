import ThemeInitializer from '@/components/initialize/ThemeInitializer'
import GAScript from './GAScript'

export default function Initialize() {
  return (
    <>
      {/* ---------- Theme Mode ---------- */}
      <ThemeInitializer />
      {/* ---------- Google Analytics ---------- */}
      <GAScript />
    </>
  )
}

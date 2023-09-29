const LoadWrap = ({ children }: { children: React.ReactNode }) => {
  return <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.5)] z-[9999]">{children}</div>
}

export default LoadWrap

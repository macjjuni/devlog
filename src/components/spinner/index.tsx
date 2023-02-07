import { LoadWrap, Dot } from './style'

const Spinner = () => {
  return (
    <LoadWrap>
      <div className="load">
        <Dot className="dot" />
        <Dot className="dot" />
        <Dot className="dot" />
      </div>
    </LoadWrap>
  )
}
export default Spinner

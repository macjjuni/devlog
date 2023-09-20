interface IListPage {
  left: React.ReactNode
  right: React.ReactNode
}

const ListPage = ({ left, right }: IListPage) => {
  return (
    <>
      <aside className="md:max-w-[280px] lg:max-w-left w-full p-md">{left}</aside>
      <section className="max-w-right w-full p-md lg:pl-xxxl">{right}</section>
    </>
  )
}

export default ListPage
